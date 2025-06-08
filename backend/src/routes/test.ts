import { Router, Request, Response } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const db = mongoose.connection.db;

    if (!db) {
      res.status(500).json({ message: "La base de données n'est pas disponible." });
      return;
    }

    const collections = await db.listCollections().toArray();
    res.json({ collections });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des collections." });
  }
});

export default router;

