import express from "express";
import productModel from '../models/product.model.js'
import cors from 'cors'
import responseHandler from '../handlers/reponse.handler.js'
import reponseHandler from "../handlers/reponse.handler.js";

const getProduct = async(req,res) => {
    try {
        const keyword = req.query.keyword
        ?{
            $or:[
                {
                    name:{
                        $regex : req.query.keyword,
                        $options:"i"
                    }
                },
            ]
        }:{};
        const products = await productModel.find({...keyword})
        responseHandler.ok(res,products)
    } catch  {
        responseHandler.error(res)
    }
};
const getProductDetail = async(req ,res) => {
    try {
        const productId = req.params.id
        const productDetail =await productModel.findById(productId)
        if(productDetail){
            responseHandler.ok(res,productDetail)
        }else{
            reponseHandler.error(res) 
        }
    } catch {
       reponseHandler.error(res) 
    }
}

export default{
    getProduct,
    getProductDetail
}