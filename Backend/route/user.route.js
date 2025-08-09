import express from "express";
import multer from 'multer';
import { signup , login, jobpost, apply, contact  } from "../controller/user.controller.js";
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });



router.post("/signup", signup);
router.post("/login", login);
router.post("/jobpost", jobpost);
router.post('/apply', upload.single('resumeFile'), apply);
router.post("/contact", contact);
// Serve resume files
router.get('/resumes/:filename', (req, res) => {
  const filePath = path.join('uploads/resumes', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});


export default router;