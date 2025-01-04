import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/database.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/User.routes.js";
import productRouter from "./routes/Product.routes.js";
import cartRouter from "./routes/Cart.routes.js";
import orderRouter from "./routes/Order.routes.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res) => {
  res.send("API WORKING!!!");
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
