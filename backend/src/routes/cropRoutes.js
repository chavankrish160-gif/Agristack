import { Router } from 'express';
import multer from 'multer';
import { createCrop, getFarmerCrops, listCrops } from '../controllers/cropController.js';
import { permit, protect } from '../middleware/auth.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', listCrops);
router.get('/my', protect, permit('farmer'), getFarmerCrops);
router.post('/', protect, permit('farmer'), upload.array('images', 5), createCrop);

export default router;
