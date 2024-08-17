import mongoose from "mongoose";
const codsoftSchema = mongoose.Schema({

    name:String,
    title: String,
    category: String,
    location:String,
    duration:String,
    stypend:Number,
    description:String,
    imageUrl:String,

})
const Codsoft=mongoose.model("Codsoft",codsoftSchema);

export default Codsoft;