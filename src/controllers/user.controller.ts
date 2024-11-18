import { Request, Response } from "express";
import {
  craeteOneUser,
  findUserByEmail,
  getManyUser,
} from "../services/user.service";

export async function getAllUsers(_req: Request, res: Response) {
  try {
    const user = await getManyUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await craeteOneUser(data);
    res
      .status(200)
      .json({ status: 200, data: user, message: "register success" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await findUserByEmail(data);
    res.status(200).json({ status: 200, data: user, message: "login success" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
