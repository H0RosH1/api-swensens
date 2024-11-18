import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getManyProduct,
  updateProduct,
} from "../services/product.service";

export async function getAllProductsController(req: Request, res: Response) {
  try {
    const categoryId = Number(req.query.categoryId);

    const product = await getManyProduct(categoryId);
    res
      .status(200)
      .json({ status: 200, data: product, message: "get all product success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function createProdectController(req: Request, res: Response) {
  try {
    const data = req.body;
    const product = await createProduct(data);
    res
      .status(200)
      .json({ status: 200, data: product, message: "create product success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateProdectController(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const product = await updateProduct(id, data);
    res
      .status(200)
      .json({ status: 200, data: product, message: "update product success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteProdectController(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const product = await deleteProduct(id);
    res
      .status(200)
      .json({ status: 200, data: product, message: "delete product success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}