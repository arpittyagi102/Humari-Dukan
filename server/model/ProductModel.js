const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        key:{
            type: String,
            required: true,
            unique:true,
        },
        title: {
            type: String,
            required: false,
        },
        price: {
            type: String,
            required: false,
        },
        desc: {
            type: String,
            required: false,

        },
        cat: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        rating: {
            type: Array,
            required: false,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("product", ProductSchema, "products");