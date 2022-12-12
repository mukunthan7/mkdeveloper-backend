import Hero from "../model/Hero.js";
import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", async (req, res) => {
  const heroes = await Hero.find({});
  res.json({ data: heroes });
});

router.post("/", async (req, res) => {
  const hero = new Hero({
    name: req.body.name,
    domain: req.body.domain,
    dev: req.body.dev,
    code: req.body.code,
    design: req.body.design,
  });
  await hero.save();
  res.json({ data: hero });
});

router.patch("/:name", async (req, res) => {
  const hero = await Hero.updateOne({ name: req.params.name }, req.body);
  res.json({ message: "Successfully Changed" });
});

export default router;
