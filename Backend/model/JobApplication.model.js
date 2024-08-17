
import mongoose from "mongoose";
const JobApplicationSchema = new mongoose.Schema({

  company_title: {
    type: String,
    required: true,
  },
  fullname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      resumeFile: {
        type: String, // This will store the file name
        required: true,
      },
      coverLetter: {
        type: String,
      },
      
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },


});
const JobApplication = mongoose.model("JobApplication", JobApplicationSchema);
export default JobApplication;
