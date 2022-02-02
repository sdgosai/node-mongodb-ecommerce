const express = require('express');
const router = new express.Router();

const productController = require("../controller/productcontroller");

// Target all id and perform insert get and delete data..
router.post("/add_product" ,productController.addProduct);
router.get("/get_all_product" ,productController.getAllProduct)
router.delete("/delete_all_product" ,productController.deleteAllProduct);

// Target perticuler id and perform get update and delete..
router.get("/get_product/:id", productController.getProduct)
router.patch("/update_product/:id",productController.updateProduct)
router.delete("/delete_product/:id",productController.deleteProduct);

module.exports = router;