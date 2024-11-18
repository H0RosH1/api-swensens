import { User } from "@prisma/client";
import prisma from "../db/prismaClient";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export const getManyUser = async () => {
  return await prisma.user.findMany({
    include: {
      gender: true,
    },
  });
};

export const craeteOneUser = async (data: User) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const user = await prisma.user.create({ data: data });
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
};

export const findUserByEmail = async (data: User) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      throw new Error("user not found");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new Error("user not found");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      email: user.email,
      firtsName: user.firtsName,
      lastName: user.lastName,
      token: token,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
};
