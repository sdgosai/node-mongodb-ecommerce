const Image = require("../model/fileuploadmodel");

const addImage = async (req,res) => {

    try{
        // console.log(req.body)
        const addRecord = new Image(req.body)
        console.log(addRecord);
        const productId = req.body.product_id
        console.log(productId);
        // const getRecord =  await Product.find({_id:productId}).populate('_id');
        const stock = await addRecord.save();
        const getRecord = await Image.findOne({ images_id: productId}).populate("_id");
        // console.log(getRecord);
        res.status(201).send(getRecord);
    } catch(err) {
        res.status(400).send(err.message);
    }
}

module.exports = { addImage,}