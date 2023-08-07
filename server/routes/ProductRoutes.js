const express = require("express");
const Product = require("../controller/ProductController");

const router = express.Router();

router.get("/",(req, res)=>{
    res.status(200).send("humari-dukan");
})

// create api
router.post("/newproduct", Product.createProduct);

// get all products
router.get("/allproducts", Product.getAllProduct);

module.exports = router;