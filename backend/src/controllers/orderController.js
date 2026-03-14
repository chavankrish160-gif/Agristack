import Crop from '../models/Crop.js';
import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const { cropId, quantity } = req.body;
  const crop = await Crop.findById(cropId);
  if (!crop) return res.status(404).json({ message: 'Crop not found' });
  if (crop.quantity < quantity) return res.status(400).json({ message: 'Insufficient quantity' });

  crop.quantity -= quantity;
  await crop.save();

  const order = await Order.create({
    buyerId: req.user.id,
    farmerId: crop.farmerId,
    cropId,
    quantity,
    price: crop.price * quantity
  });

  res.status(201).json(order);
};

export const listOrdersForUser = async (req, res) => {
  const { role, id } = req.user;
  const query = role === 'buyer' ? { buyerId: id } : role === 'farmer' ? { farmerId: id } : {};
  const orders = await Order.find(query).populate('cropId').populate('buyerId', 'name').populate('farmerId', 'name');
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(order);
};
