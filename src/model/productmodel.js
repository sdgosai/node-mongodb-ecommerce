const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({
    product_name:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
        trim:true,
    },
    is_deleted:{
        type:Boolean,
        default:false,
    },
}, { timestamps:true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;