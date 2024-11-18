import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategorysController,
  updateCategoryController,
} from "../controllers/category.controller";

const router = express.Router();

router.get("/", getAllCategorysController);

router.post("/", createCategoryController);
router.put("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
