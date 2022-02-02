const express = require("express");
const router = new express.Router();

const stockController = require("../controller/stockcontroller")

router.post("/add_stock", stockController.addStockData);
router.get("/show_stock_data/:id", stockController.getStockData);

module.exports = router;