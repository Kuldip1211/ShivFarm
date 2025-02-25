import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/Product.controller.js";
import upload from "../middleware/multer.middleware.js";
import adminAuth from "../middleware/adminAuth.middleware.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
  ]),
  addProduct
);
productRouter.delete("/remove", adminAuth,removeProduct);
productRouter.get("/single", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
