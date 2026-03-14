import Crop from '../models/Crop.js';

export const createCrop = async (req, res) => {
  const images = req.files?.map((file) => file.path) ?? [];
  const crop = await Crop.create({
    ...req.body,
    images,
    farmerId: req.user.id
  });
  res.status(201).json(crop);
};

export const listCrops = async (req, res) => {
  const { minPrice, maxPrice, cropType, location } = req.query;
  const query = {};

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  if (cropType) query.cropType = cropType;
  if (location) query.location = location;

  const crops = await Crop.find(query).populate('farmerId', 'name location phone');
  res.json(crops);
};

export const getFarmerCrops = async (req, res) => {
  const crops = await Crop.find({ farmerId: req.user.id });
  res.json(crops);
};
