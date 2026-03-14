import Delivery from '../models/Delivery.js';
import Order from '../models/Order.js';

export const assignDelivery = async (req, res) => {
  const { orderId, pickupLocation, dropLocation, earning } = req.body;
  const delivery = await Delivery.create({
    driverId: req.user.id,
    orderId,
    pickupLocation,
    dropLocation,
    earning
  });
  await Order.findByIdAndUpdate(orderId, {
    status: 'in_transit',
    deliveryPartner: req.user.id
  });
  res.status(201).json(delivery);
};

export const updateDeliveryStatus = async (req, res) => {
  const delivery = await Delivery.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status, gps: req.body.gps },
    { new: true }
  );
  res.json(delivery);
};

export const listDeliveries = async (req, res) => {
  const deliveries = await Delivery.find({ driverId: req.user.id }).populate('orderId');
  res.json(deliveries);
};
