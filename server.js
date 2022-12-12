import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import cors from "cors";
import connectDB from "./database/mongoDb.js";
import Hero from "./router/HeroApi.js";
import About from "./router/AboutApi.js";
import Skills from "./router/SkillsApi.js";
import Auth from "./router/AuthApi.js";
import Passport from "./config/passport.js";
import user from "./router/user.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
app.use("/hero", Hero);
app.use("/about", About);
app.use("/skills", Skills);
app.use("/auth", Auth);
app.use("/user", user);
app.use(passport.initialize());
Passport(passport);

await connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () =>
  console.log("Server started on port http://localhost:" + PORT)
);
