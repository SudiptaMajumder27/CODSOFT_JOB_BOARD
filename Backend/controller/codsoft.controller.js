import Codsoft from "../model/codsoft.model.js";

export const getCodsoft=async(req,res)=>{
    try{
        const codsoft = await Codsoft.find()
        res.status(200).json(codsoft)

    }catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)

    }
}