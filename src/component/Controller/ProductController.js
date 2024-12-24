const productModel = require("../Model/ProductModel");

const ProductController= async (req, res) => {
    const {productid, productname, brand, modelno, price, stock} = req.body;

    const generatedprodId = productid || Math.floor(Math.random() * 1000000);
    const newProductAdded = new productModel({
        productid :generatedprodId,
        productname,
        brand,
        modelno,
        price,
        stock
    });

    const addedProduct = await newProductAdded.save();
    console.log(addedProduct);

    return res.status(200).json({message:"product added successfully"})
}

module.exports = {ProductController}