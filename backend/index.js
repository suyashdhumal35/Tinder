require('dotenv').config();
const express = require("express");
const connectDB = require("./config/database")
const app = express();

connectDB().then(() => {
    console.log("Connected to MongoDB..............");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        console.log(`http://localhost:${process.env.PORT}`);

    })
})
    .catch((err) => {
        console.error("Error conecting to MongoDB !!!!!!!!!!", err);
    })


