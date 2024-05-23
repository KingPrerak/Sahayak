// src/api/register.ts
import express from 'express';
import bcrypt from 'bcryptjs';
import UserModel from "../../../models/UserModel"
import Link from "next/link";

const router = express.Router();

// Route for user registration
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  console.log("success")
  try {
    // Check if user already exists
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new UserModel({
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message); // Access the `message` property
    } else {
      console.error('Unknown error', err);
    }
    res.status(500).send('Server Error');
  }
});

export default router;