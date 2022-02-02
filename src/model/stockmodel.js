const mongoose = require("mongoose")

const stockSchema = new mongoose.Schema({
    product_id:{type: mongoose.Schema.Types.ObjectId,ref:'Product'},
    stock_available:{
        type:Number,
        required:[true, "Please Enter stock"]
    },
}, { timestamps:true });

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;