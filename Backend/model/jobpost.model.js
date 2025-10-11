import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema({
    email: { type: String, required: true },
    fullname: { type: String, required: true },
    company_name: { type: String, required: true },
    title: { type: String, required: true },
    skils: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    stypend: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const JobPost = mongoose.model("jobposts", JobPostSchema);

export default JobPost;
