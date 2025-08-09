import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name : {type: String , required: true},
    email : {type: String , required: true},
    description : {type: String , required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Contact = mongoose.model("contacts" ,ContactSchema );
export default Contact;