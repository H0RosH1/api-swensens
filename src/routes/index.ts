import express from "express";
import userRouter from "./user.routes"
import productRouter from "./product.routes"
import categoryRouter from "./category.routes"

const router = express.Router();

router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/category", categoryRouter);

export default router;