import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    images: [String],
    location: String,
    harvestDate: Date,
    description: String,
    cropType: String
  },
  { timestamps: true }
);

export default mongoose.model('Crop', cropSchema);
