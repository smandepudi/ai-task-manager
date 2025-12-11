import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import { breakdownTask, suggestPriority, estimateTime } from '../services/ai.service';

/**
 * Generate subtasks for a task using AI
 */
export const generateSubtasks = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }

    const subtasks = await breakdownTask(title, description);

    res.json({
      message: 'Subtasks generated successfully',
      subtasks,
    });
  } catch (error) {
    console.error('Generate subtasks error:', error);
    res.status(500).json({ error: 'Failed to generate subtasks' });
  }
};

/**
 * Get AI priority suggestion for a task
 */
export const getPrioritySuggestion = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }

    const priority = await suggestPriority(title, description);

    res.json({
      message: 'Priority suggested successfully',
      priority,
    });
  } catch (error) {
    console.error('Priority suggestion error:', error);
    res.status(500).json({ error: 'Failed to suggest priority' });
  }
};

/**
 * Get AI time estimate for a task
 */
export const getTimeEstimate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { title, description } = req.body;

    if (!title) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }

    const estimatedTime = await estimateTime(title, description);

    res.json({
      message: 'Time estimated successfully',
      estimatedTime,
    });
  } catch (error) {
    console.error('Time estimate error:', error);
    res.status(500).json({ error: 'Failed to estimate time' });
  }
};