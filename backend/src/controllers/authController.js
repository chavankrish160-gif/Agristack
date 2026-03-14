import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const signToken = (user) =>
  jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

export const register = async (req, res) => {
  const { name, phone, email, password, role, location, farmSize } = req.body;
  const exists = await User.findOne({ phone });
  if (exists) return res.status(409).json({ message: 'User already exists' });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    phone,
    email,
    password: hash,
    role,
    location,
    farmSize
  });

  return res.status(201).json({ token: signToken(user), user });
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  return res.json({ token: signToken(user), user });
};
