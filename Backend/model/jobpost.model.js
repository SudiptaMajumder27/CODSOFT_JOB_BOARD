import mongoose from "mongoose";

<<<<<<< HEAD
const JobPostSchema = new mongoose.Schema(
    {
=======
const JobPostSchema = new mongoose.Schema({
>>>>>>> 5cc42f323745e5990ee4a9bd6e8a425c4316d505
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
<<<<<<< HEAD
}
);
=======
});
>>>>>>> 5cc42f323745e5990ee4a9bd6e8a425c4316d505

const JobPost = mongoose.model("jobposts", JobPostSchema);

export default JobPost;
