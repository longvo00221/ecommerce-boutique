import express from "express";
import productModel from '../models/product.model.js'
import cors from 'cors'
import responseHandler from '../handlers/reponse.handler.js'

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
        responseHandler.created(res,products)
    } catch  {
        responseHandler.error(res)
    }
};

export default{
    getProduct
}