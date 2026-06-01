import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✓ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('✗ MongoDB connection error:', error);
  });

// Basic Routes
app.get('/', (req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
    },
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n🚀 OctoFit Tracker API running at http://localhost:${PORT}`);
  console.log(`📊 MongoDB: ${MONGODB_URI}`);
  console.log('Press Ctrl+C to stop\n');
});
