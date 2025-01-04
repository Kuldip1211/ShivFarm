import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/Order.controller.js";
import adminAuth from "../middleware/adminAuth.middleware.js";
import authUser from "../middleware/auth.middleware.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);

// User Features
orderRouter.post('/userorders', authUser,userOrders);

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter