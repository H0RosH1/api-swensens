import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 9000,
  databaseUrl: process.env.DATABASE_URL || "",
};
