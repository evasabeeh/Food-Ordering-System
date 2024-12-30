import express from "express";
import authMiddleware from "../auth.js";
import { listOrders, placeOrder, updateStatus, useOrders, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders", authMiddleware, useOrders)
orderRouter.get("/list", listOrders)
orderRouter.post("/status", updateStatus)

export default orderRouter;