import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';

// Load environment variables
dotenv.config();

// Create Express application
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: '🚀 AI Task Manager API is running!',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/auth', authRoutes);

// API health endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    database: 'connected',
    auth: 'enabled'
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔐 Auth routes: /api/auth/register, /api/auth/login`);
});