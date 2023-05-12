import express from "express";
import { product } from "./src/staticData/product.data.js";
import asyncHandler from 'express-async-handler'
import productModel from "./src/models/product.model.js";

const importStaticData = express.Router();

importStaticData.post("/products", asyncHandler(async(req,res) => {
    await productModel.deleteMany({})
    const importProducts = await productModel.insertMany(product)
    res.send({importProducts})
}));

export default importStaticData