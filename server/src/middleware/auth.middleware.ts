import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.utils';

// Explicitly define all properties
export interface AuthRequest extends Request {
  body: any;
  params: any;
  query: any;
  userId?: string;
  user?: any;
}

/**
 * Middleware to verify JWT token and protect routes
 */
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authReq = req as AuthRequest;
    
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      res.status(401).json({ error: 'Access token required' });
      return;
    }

    // Verify token
    const decoded = verifyToken(token);
    authReq.userId = decoded.userId;

    next(); // Continue to next middleware/route
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};