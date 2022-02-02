const Stock = require("../model/stockmodel")

const addStockData = async (req,res) => {
    try{
        // console.log(req.body)
        const addRecord = new Stock(req.body)
        console.log(addRecord);
        const productId = req.body.product_id
        console.log(productId);
        // const getRecord =  await Product.find({_id:productId}).populate('_id');
        const stock = await addRecord.save();
        const getRecord = await Stock.findOne({ stocks_id: productId}).populate("_id");
        // console.log(getRecord);
        res.status(201).send(getRecord);
    } catch(err) {
        res.status(400).send(err.message);
    }
};

const getStockData = async (req,res) => {
    try{
        const productId = req.params.id
        const getRecord = await Stock.find({stocks_id: productId}).populate("_id")
        res.status(200).send(getRecord);
        // console.log(getRecord);
        // console.log(productId);
    } catch(err) {
        res.status(400).send(err.message);
    }
    // try{
    //     const _id = req.params.id;
    //     const getsRecord =  await Product.findById({_id});
    //     res.status(200).send(getsRecord);
    // }catch(err) {
    //     res.status(400).send(err.message);
    // }
}

module.exports = { addStockData, getStockData, }