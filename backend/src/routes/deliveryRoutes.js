import { Router } from 'express';
import { assignDelivery, listDeliveries, updateDeliveryStatus } from '../controllers/deliveryController.js';
import { permit, protect } from '../middleware/auth.js';

const router = Router();
router.use(protect, permit('delivery'));
router.get('/', listDeliveries);
router.post('/', assignDelivery);
router.patch('/:id', updateDeliveryStatus);

export default router;
