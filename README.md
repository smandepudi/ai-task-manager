# 🤖 AI-Powered Task Manager

A full-stack task management application with AI-powered features built with modern technologies.

## 🌟 Live Demo

- **Frontend:** [View Live App](your-vercel-url-here)
- **Repository:** [GitHub](your-github-url-here)

## ✨ Features

### Core Functionality
- ✅ **User Authentication** - Secure JWT-based registration and login
- ✅ **Task Management** - Full CRUD operations for tasks
- ✅ **Real-time Updates** - Instant task list refresh
- ✅ **Responsive Design** - Beautiful UI that works on all devices

### AI-Powered Features
- 🤖 **AI Task Breakdown** - Automatically generate subtasks from main tasks
- 🎯 **Smart Prioritization** - AI suggests priority levels
- ⏱️ **Time Estimation** - AI estimates task completion time

### UI/UX
- 🎨 **Modern Design** - Built with Tailwind CSS
- 🎭 **Color-Coded Priorities** - Visual priority indicators
- 📱 **Mobile Responsive** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Optimized React with React Query

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client

### Backend
- **Node.js** with Express
- **TypeScript** - Type-safe server code
- **Prisma ORM** - Type-safe database queries
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing

### Database & AI
- **PostgreSQL** - Hosted on Supabase
- **Google Generative AI (Gemini)** - AI features
- **Supabase** - Cloud database hosting

### DevOps
- **Vercel** - Frontend deployment
- **Railway/Render** - Backend deployment
- **Git & GitHub** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL (or Supabase account)
- Google AI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-task-manager.git
cd ai-task-manager
```

2. **Setup Backend**
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=5001
DATABASE_URL="your-supabase-connection-pooling-url"
DIRECT_URL="your-supabase-direct-url"
JWT_SECRET="your-secret-key"
GOOGLE_AI_API_KEY="your-google-ai-key"
```

Run migrations:
```bash
npx prisma migrate dev
npx prisma generate
```

Start backend:
```bash
npm run dev
```

3. **Setup Frontend**
```bash
cd ../client
npm install
```

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5001
```

Start frontend:
```bash
npm run dev
```

4. **Access the app**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

## 📸 Screenshots

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### AI Task Breakdown
![AI Features](./screenshots/ai-breakdown.png)

### Task Management
![Tasks](./screenshots/tasks.png)

## 🏗️ Architecture
```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│          React + TypeScript + Tailwind          │
│                Hosted on Vercel                  │
└───────────────────┬─────────────────────────────┘
                    │
                    │ REST API (JWT Auth)
                    │
┌───────────────────▼─────────────────────────────┐
│                   Backend                        │
│           Node.js + Express + Prisma            │
│              Hosted on Railway                   │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            │ Prisma ORM          │ Google AI API
            │                      │
┌───────────▼──────────┐    ┌─────▼──────────────┐
│   PostgreSQL DB      │    │   AI Features      │
│  (Supabase Cloud)    │    │  (Gemini API)      │
└──────────────────────┘    └────────────────────┘
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- CORS configuration
- Environment variable protection
- SQL injection prevention (Prisma ORM)

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Tasks (Protected)
- `GET /api/tasks` - Get all user tasks
- `POST /api/tasks` - Create new task
- `GET /api/tasks/:id` - Get single task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### AI Features (Protected)
- `POST /api/ai/breakdown` - Generate subtasks
- `POST /api/ai/priority` - Suggest priority
- `POST /api/ai/estimate` - Estimate time

## Key Learnings & Challenges

- Implemented type-safe full-stack TypeScript application
- Integrated AI features with Google Generative AI
- Designed and implemented RESTful API architecture
- Managed complex state with React Query
- Implemented secure authentication flow
- Deployed full-stack application to production

## Future Enhancements

- [ ] Task editing functionality
- [ ] Task filtering and search
- [ ] Drag-and-drop task reordering
- [ ] Task categories and tags
- [ ] Collaborative features (share tasks)
- [ ] Email notifications
- [ ] Task analytics and insights
- [ ] Mobile app (React Native)

## Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

## 📄 License

MIT License - feel free to use this project for learning!

## Acknowledgments

- Google Generative AI for AI capabilities
- Supabase for database hosting
- Vercel for frontend hosting
- The React and Node.js communities

---

**Built to showcase full-stack development skills**