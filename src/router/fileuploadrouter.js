const express = require("express");
const router = new express.Router();
const multer = require('multer');

const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, __dirname + '/./src/public/upload')
    },
    filename: function (req, file, cb) {
        const name = file.originalname;
        cb(null, `${new Date().getTime()}-${name}`)
    }
})
var upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
            return cb(new Error('file is not allowed'))
        }
        cb(null, true)
    }
 }).array("product_images");

const fileUploadController = require("../controller/fileuploadcontroller");

router.post("/upload_image", upload, fileUploadController.addImage)

module.exports = router