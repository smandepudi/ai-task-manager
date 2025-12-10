import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';

// Extend Express Request to include userId
export interface AuthRequest extends Request {
  userId?: string;
}

/**
 * Middleware to verify JWT token and protect routes
 */
export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    // Verify token
    const decoded = verifyToken(token);
    req.userId = decoded.userId;

    next(); // Continue to next middleware/route
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};