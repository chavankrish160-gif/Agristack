import { Router } from 'express';
import { getAdminStats, listUsers } from '../controllers/adminController.js';
import { permit, protect } from '../middleware/auth.js';

const router = Router();
router.use(protect, permit('admin'));
router.get('/stats', getAdminStats);
router.get('/users', listUsers);

export default router;
