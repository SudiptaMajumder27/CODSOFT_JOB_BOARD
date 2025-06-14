import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

import Contact from './model/contact.model.js';
import JobPost from './model/jobpost.model.js'; 
import JobApplication from './model/JobApplication.model.js';
import codsoftRoute from './route/codsoft.route.js';
import userRoute from './route/user.route.js';

// Setup __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure 'uploads/resumes' directory exists
const uploadsDir = path.join(__dirname, 'uploads', 'resumes');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Routes
app.use('/codsoft', codsoftRoute);
app.use('/user', userRoute);

// Fetch all job posts
app.get('/getjobposts', async (req, res) => {
  try {
    const jobposts = await JobPost.find();
    res.json(jobposts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job posts', details: err });
  }
});

// Fetch a single job post by ID
app.get('/getjobposts/:id', async (req, res) => {
  try {
    const jobpost = await JobPost.findById(req.params.id);
    if (!jobpost) {
      return res.status(404).json({ message: 'Job post not found' });
    }
    res.json(jobpost);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err });
  }
});

// Fetch job applications by email
app.get('/myapplications', async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const applications = await JobApplication.find({ email }).populate('_id');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications', details: err });
  }
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Stop app if DB not connected
  });
