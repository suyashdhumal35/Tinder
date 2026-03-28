require('dotenv').config();
const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./models/User")

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save();
        res.send("User Added sucessfully!!!");
    } catch (err) {
        res.status(400).send("Error saving the user :" + err.message);
    }
})

// get user by email
app.get("/user", async (req, res) => {
    const userEmail = req.body.emailId;
    try {
        const users = await User.findOne({ emailId: userEmail })
        if (!users) {
            res.status(400).send("User not found ");
        } else {
            res.send(users)
        }
    } catch (err) {
        res.status(400).send("Something went wrong!!!");
    }
})

// feed api-get all the users from the database
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(400).send("Something went wrong!!!");
    }
})

connectDB()
    .then(() => {
        console.log("Connected to MongoDB..............");
        app.listen(process.env.PORT, () => {
            // console.log(`Server is running on port ${process.env.PORT}`);
            console.log(`http://localhost:${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.error("Error conecting to MongoDB !!!!!!!!!!", err);
    })


