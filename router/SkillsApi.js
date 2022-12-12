import Skills from "../model/Skills.js";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { title, image } = req.body;
  const skills = new Skills({
    title: title,
    image: image,
  });
  await skills.save();
  res.json({ data: skills });
});

router.get("/", async (req, res) => {
  const skills = await Skills.find({});
  res.json({ data: skills });
});

export default router;
