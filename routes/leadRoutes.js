import express from "express";
import Lead from "../models/Lead.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ message: "All fields required" });

  const token = crypto.randomBytes(20).toString("hex");

  try {
    const lead = new Lead({ name, email, token });
    await lead.save();

    const verifyLink = `${process.env.CLIENT_URL}/thankyou.html?token=${token}`;
    await sendEmail(
      email,
      "Verify your email - SaaSify",
      `<h2>Welcome, ${name}!</h2><p>Click below to verify your email:</p><a href="${verifyLink}">Verify Email</a>`
    );

    res.json({ message: "Verification email sent. Please check your inbox." });
  } catch (err) {
    res.status(400).json({ message: "Email already registered or invalid." });
  }
});

router.get("/verify/:token", async (req, res) => {
  const lead = await Lead.findOne({ token: req.params.token });
  if (!lead) return res.status(400).send("Invalid or expired token.");

  lead.verified = true;
  lead.token = null;
  await lead.save();

  res.redirect(`${process.env.CLIENT_URL}/thankyou.html`);
});

export default router;
