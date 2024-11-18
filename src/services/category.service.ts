import { Category } from "@prisma/client";
import prisma from "../db/prismaClient";

export const getManyCategory = async () => {
  return await prisma.category.findMany({orderBy: {id: 'asc'}});
};

export const createCategory = async (data: Category) => {
  try {
    const category = await prisma.category.create({ data: data });

    return category;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateCategory = async (id: number, data: Category) => {
  try {
    const category = await prisma.category.update({
      where: { id: id },
      data: data,
    });

    return category;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const category = await prisma.category.delete({ where: { id: id } });
    return category;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      throw new Error(error.message);
    }
  }
};
