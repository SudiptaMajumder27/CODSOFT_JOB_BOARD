
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import Contact from './model/contact.model.js';
import JobPost from './model/jobpost.model.js'; 
import codsoftRoute from './route/codsoft.route.js';
import userRoute from './route/user.route.js';
import JobApplication from './model/JobApplication.model.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const URI = process.env.ATLASDB_URL;

// Connect to MongoDB
mongoose.connect(URI);
 
// Define routes
app.use('/codsoft', codsoftRoute);
app.use('/user', userRoute);

app.get('/getjobposts', (req, res) => {
  JobPost.find()
    .then(jobposts => res.json(jobposts))
    .catch(err => res.status(500).json({ error: 'Failed to fetch job posts', details: err }));
});

app.get('/getjobposts/:id', (req, res) => {
  JobPost.findById(req.params.id)
    .then(jobpost => {
      if (!jobpost) {
        return res.status(404).json({ message: 'Job post not found' });
      }
      res.json(jobpost);
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err }));
});

app.get('/myapplications', (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  JobApplication.find({ email: email })
    .populate('_id')
    .then(applications => res.status(200).json(applications))
    .catch(err => res.status(500).json({ error: 'Failed to fetch applications', details: err }));
});

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads', 'resumes');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

