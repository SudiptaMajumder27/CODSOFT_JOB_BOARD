import mongoose from "mongoose";

<<<<<<< HEAD
const ContactSchema = new mongoose.Schema(
    {
=======
const ContactSchema = new mongoose.Schema({
>>>>>>> 5cc42f323745e5990ee4a9bd6e8a425c4316d505
    name : {type: String , required: true},
    email : {type: String , required: true},
    description : {type: String , required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
<<<<<<< HEAD
}
);
=======
});
>>>>>>> 5cc42f323745e5990ee4a9bd6e8a425c4316d505

const Contact = mongoose.model("contacts" ,ContactSchema );
export default Contact;