import { Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  getManyCategory,
  updateCategory,
} from "../services/category.service";

export async function getAllCategorysController(req: Request, res: Response) {
  try {

    const category = await getManyCategory();
    res
      .status(200)
      .json({
        status: 200,
        data: category,
        message: "get all category success",
      });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createCategoryController(req: Request, res: Response) {
  try {
    const data = req.body;
    const category = await createCategory(data);
    res
      .status(200)
      .json({ status: 200, data: category, message: "create category success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateCategoryController(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const category = await updateCategory(id, data);
    res
      .status(200)
      .json({ status: 200, data: category, message: "update category success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteCategoryController(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const category = await deleteCategory(id);
    res
      .status(200)
      .json({ status: 200, data: category, message: "delete category success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}