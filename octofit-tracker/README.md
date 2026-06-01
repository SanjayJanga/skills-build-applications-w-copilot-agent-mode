# OctoFit Tracker

A modern multi-tier fitness tracking application built with React, Express, Node.js, TypeScript, and MongoDB.

## Architecture

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Port**: 5173
- **Location**: `./frontend`

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Port**: 8000
- **Location**: `./backend`

### Database
- **Database**: MongoDB
- **Port**: 27017

## Prerequisites

- Node.js (v18+)
- npm (v9+)
- MongoDB (v5+ or use Docker)

## Getting Started

### Start MongoDB (Optional - using Docker)
```bash
docker run -d -p 27017:27017 --name octofit-mongodb mongo
```

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will be available at: http://localhost:5173

### Setup Backend

```bash
cd backend
npm install
npm run dev
```

Backend API will be available at: http://localhost:8000

### API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

### Backend Build
```bash
cd backend
npm run build
```

### Backend Production
```bash
cd backend
npm run start
```

## Project Structure

```
octofit-tracker/
├── frontend/           # React + Vite application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/            # Express + TypeScript API
│   ├── src/
│   │   └── server.ts
│   ├── dist/           # Compiled JavaScript
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

## Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
PORT=8000
NODE_ENV=development
```

See `.env.example` in the backend folder for template.
