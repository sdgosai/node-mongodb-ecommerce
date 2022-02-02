const Product = require("../model/productmodel");

// Add Products
const addProduct = async (req,res) => {
    try{
        const { product_name , price, description } = req.body;
        if(!product_name || !price || !description){
            return res.status(400).json({
                data: "Please file required details",
                success: false
            })
        }
        const addRecord = new Product(req.body)
        const insertRecord = await addRecord.save();
        res.status(201).send(insertRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

// Get all products list
const getAllProduct = async (req,res) =>{
    try{
        const getRecord =  await Product.find({}).select("-tokens -is_deleted")
        res.status(200).send(getRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

//Get perticuler product
const getProduct = async (req,res) =>{
    try{
        const _id = req.params.id;
        const getsRecord =  await Product.findById({_id}).select("-tokens -is_deleted")
        res.status(200).send(getsRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

//Update perticuler product
const updateProduct = async (req, res) => {
    try{
        const _id = req.params.id;
        const updateRecord =  await Product.findByIdAndUpdate(_id, req.body, { new:true });
        res.send(updateRecord);
        console.log(updateRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

//Delete all product
const deleteAllProduct = async (req,res) => {
    try{
        const deleteRecord =  await Product.deleteMany(req.params.body);
        res.send(deleteRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

//Delete perticuler product
const deleteProduct = async (req,res) => {
    try{
        const deleteRecord =  await Product.findByIdAndDelete(req.params.id);
        res.send(deleteRecord);
    }catch(err) {
        res.status(400).send(err.message);
    }
}

module.exports = {addProduct, getAllProduct, getProduct, updateProduct, deleteProduct, deleteAllProduct, }