import { Router } from 'express';
import { createOrder, listOrdersForUser, updateOrderStatus } from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';

const router = Router();
router.use(protect);
router.post('/', createOrder);
router.get('/', listOrdersForUser);
router.patch('/:id/status', updateOrderStatus);

export default router;
