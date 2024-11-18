import { Prisma, Product } from "@prisma/client";
import prisma from "../db/prismaClient";

export const getManyProduct = async (id: number) => {
  const categoryWhere: Prisma.ProductWhereInput = id ? { categoryId: id } : {};

  return await prisma.product.findMany({
    where: categoryWhere,
    orderBy: { id: "asc" },
    include: { Category: true },
  });
};

export const createProduct = async (data: Product) => {
  try {
    const product = await prisma.product.create({ data: data });

    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);

      throw new Error(error.message);
    }
  }
};

export const updateProduct = async (id: number, data: Product) => {
  try {
    const product = await prisma.product.update({
      where: { id: id },
      data: data,
    });

    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.product.delete({ where: { id: id } });
    return product;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      throw new Error(error.message);
    }
  }
};
