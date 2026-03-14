import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['farmer', 'buyer', 'delivery', 'admin'],
      default: 'farmer'
    },
    location: String,
    farmSize: Number,
    walletBalance: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
