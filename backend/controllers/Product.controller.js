import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/Product.model.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];

    // uploading images to cloudinary
    const images = [image1].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );


    // console.log(name, description, price, category, subCategory, sizes, bestseller);
    // console.log(imagesUrl);
  

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const newProduct = new productModel(productData);
    await newProduct.save();

    res.json({ success: true, message: "Product added successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};
const removeProduct = async (req, res) => {
  try {
    const productId = req.body.id; // Extract id from request body

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required!",
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.json({ success: true, message: "Product deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
