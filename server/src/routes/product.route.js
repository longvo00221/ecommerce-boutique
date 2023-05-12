import express from "express";
import productController from "../controllers/product.controller.js";
import requestHandler from "../handlers/request.handler.js";

const router = express.Router();
router.get("/", requestHandler.validate, productController.getProduct);
export default router;
