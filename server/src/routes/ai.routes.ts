import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import {
  generateSubtasks,
  getPrioritySuggestion,
  getTimeEstimate,
} from '../controllers/ai.controller';

const router = Router();

// All AI routes require authentication
router.use(authenticateToken);

// POST /api/ai/breakdown - Generate subtasks
router.post('/breakdown', generateSubtasks);

// POST /api/ai/priority - Suggest priority
router.post('/priority', getPrioritySuggestion);

// POST /api/ai/estimate - Estimate time
router.post('/estimate', getTimeEstimate);

export default router;