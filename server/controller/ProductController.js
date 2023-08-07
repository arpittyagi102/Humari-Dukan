const ProductModel = require("../model/ProductModel");

// create product
module.exports.createProduct = async (req, res)=>{
    const newProduct = new ProductModel(req.body);
    // console.log(newProduct);
    try{
        // save product
        const saveProduct = await newProduct.save();

        res.status(200).send({
            status:true,
            saveProduct,
        })
    }catch(err){
        res.status(500).send({
            status:false,
            err,
        });
    }
}

//get by categories
module.exports.getAllProduct = async (req, res)=>{
    const catName = req.query.category;
    try {
        let products;

        if(catName){
            products = await ProductModel.find({
                category: {
                    $in: [catName],
                },
            });
        }else{
            products = await ProductModel.find();
        }

        res.status(200).send({
            status:true,
            products
        });
    } catch (error) {
        res.status(500).send({
            status:false,
            error,
        });
    }
}