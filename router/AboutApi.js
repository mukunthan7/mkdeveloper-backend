import About from "../model/About.js";
import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", async (req, res) => {
  const about = await About.find({});
  res.json({ data: about });
});

router.post("/", async (req, res) => {
  const about = new About({
    herocontent: req.body.herocontent,
    bio: req.body.bio,
    web: req.body.web,
  });
  await about.save();
  res.json({ data: about });
});

export default router;
