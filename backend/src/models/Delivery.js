import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema(
  {
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    status: {
      type: String,
      enum: ['assigned', 'picked', 'in_route', 'delivered'],
      default: 'assigned'
    },
    gps: {
      lat: Number,
      lng: Number
    },
    earning: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Delivery', deliverySchema);
