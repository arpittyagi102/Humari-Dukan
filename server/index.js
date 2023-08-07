const express = require('express');
const mongoose = require("mongoose");
const ProductRoutes = require("./routes/ProductRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const PORT = 5500;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use("/home", (req, res)=>{
//     res.status(200).send("this is home page")
// })


app.use("/api", ProductRoutes);

dotenv.config();


// connecting mongoose
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
})
    .then(console.log("Connected to mongoDB..."))
    .catch((err) => {
        console.log("MongoDB connection failed!",
            err,
        )
    });

app.listen(PORT, (req, res) => {
    try {
        console.log("Backend is running on port:", PORT);
    } catch (err) {
        err
    }
});