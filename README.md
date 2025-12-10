# AI-Powered Task Manager

A full-stack task management application with AI features.

## Tech Stack

- Frontend: React + TypeScript + Tailwind CSS + Vite
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL (Supabase)
- AI: Google Generative AI

## Setup

Instructions coming soon...

## Development
```bash
# Frontend
cd client && npm run dev

# Backend
cd server && npm run dev
```

## Author

Sindhura Mandepudi - Built for portfolio showcase

## Installation

-  npm install express cors dotenv jsonwebtoken bcryptjs @google/generative-ai
**Intent:** "Download all the main libraries my backend needs to work"

**Each package does:**
- **express** - Web server framework (handles API routes)
- **cors** - Allows frontend (client) to talk to backend (server)
- **dotenv** - Loads environment variables (like API keys)
- **jsonwebtoken** - Creates authentication tokens for users
- **bcryptjs** - Securely hashes passwords
- **@google/generative-ai** - Google AI SDK (for our AI features!)



## Database Setup

- Database Setup (Supabase + Prisma)
- We'll set up:
    - Supabase account
    - PostgreSQL database
    - Prisma ORM
    - Database models (User, Task, Subtask)

## Run

- Run on client. go in to the folder and run 'npm run dev' http://localhost:5173/
- This will run the UI
- Run on server. go in to the folder and run 'npm run dev' http://localhost:5001/
- This will run the server code and return a JSON object.

## SetUp
ai-task-manager/
├── client/          ✅ React + TypeScript + Tailwind
├── server/          ✅ Express + TypeScript + Prisma
│   └── prisma/      ✅ Database models & migrations
├── Database         ✅ Supabase PostgreSQL (3 tables!)


✅ Frontend: Beautiful React UI with Tailwind CSS
✅ Backend: Express API with TypeScript
✅ Database: PostgreSQL on Supabase
✅ Authentication: Complete register/login flow with JWT
✅ Protected Routes: Dashboard only accessible when logged in
✅ Token Management: Persistent login using localStorage