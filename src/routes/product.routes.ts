import express from "express";
import {
  createProdectController,
  deleteProdectController,
  getAllProductsController,
  updateProdectController,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", getAllProductsController);

router.post("/", createProdectController);
router.put("/:id", updateProdectController);
router.delete("/:id", deleteProdectController);

export default router;
