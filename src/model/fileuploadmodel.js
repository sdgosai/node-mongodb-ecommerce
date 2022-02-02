const mongoose = require("mongoose");

const fileUploadSchema = new mongoose.Schema({
    product_id:{
        product:{type: mongoose.Schema.Types.ObjectId,ref:'Product'}
    },
    product_images:{
        data:Buffer,
        contentType:String,
    }
}, { timestamps:true });

const Image = mongoose.model("Image", fileUploadSchema);
module.exports = Image;