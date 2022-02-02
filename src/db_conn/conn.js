const mongoose = require('mongoose');

// || connect mongo atlas Database ||
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DATABASE connected...");
}).catch((err) => console.log(err.message,"DATABASE can't connected..."));