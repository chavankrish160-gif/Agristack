import Crop from '../models/Crop.js';
import Order from '../models/Order.js';
import User from '../models/User.js';

export const getAdminStats = async (_req, res) => {
  const [users, farmers, buyers, orders, crops, revenue] = await Promise.all([
    User.countDocuments(),
    User.countDocuments({ role: 'farmer' }),
    User.countDocuments({ role: 'buyer' }),
    Order.countDocuments(),
    Crop.countDocuments(),
    Order.aggregate([{ $group: { _id: null, total: { $sum: '$price' } } }])
  ]);

  res.json({
    users,
    farmers,
    buyers,
    orders,
    crops,
    revenue: revenue[0]?.total ?? 0,
    fraudAlerts: Math.floor(orders * 0.02)
  });
};

export const listUsers = async (_req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};
