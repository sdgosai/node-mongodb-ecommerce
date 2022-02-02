const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
app.use(express.json());
require("./db_conn/conn");

const userRouter = require("./router/userrouter");
app.use(userRouter);
const productRouter = require("./router/productrouter");
app.use(productRouter);
const fileUploadRouter = require("../src/router/fileuploadrouter");
app.use(fileUploadRouter);
const stockRouter = require("./router/stockrouter")
app.use(stockRouter);

const port = process.env.PORT;
app.get("/homepage", async (req, res) => {
    res.send("Hello, Welcome in my website home menu :)");
});
app.get("/adminpage", async (req, res) => {
    res.send("Hello, Welcome in my website home menu :)");
});
app.get("/userpage", async (req, res) => {
    res.send("Hello, Welcome in my website home menu :)");
});
app.get("/dashboard", async (req, res) => {
    res.send("Hello, Welcome in my website home menu :)");
});
app.listen(port, () => {
    console.log(`node application live at ${port}...`);
});