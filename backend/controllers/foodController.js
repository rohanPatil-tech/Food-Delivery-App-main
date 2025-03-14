import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item in db
const addFood = async(req, res)=>{
    

    let image_filename = `${req.file.filename}`
    
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category:req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//list food items
const listFood = async(req, res) =>{

    try {
        const foods = await foodModel.find({})
        res.json({success:true, data: foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//remove list items
const removeFood = async(req, res) => {
    
    try {
        const deletedFood  = await foodModel.findByIdAndDelete(req.body.id)
        fs.unlink(`uploads/${deletedFood.image}`,()=>{})

        if (!deletedFood) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Respond with a success message
        res.json({ success: true, message: "Food item removed" });

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}
export {addFood,listFood,removeFood}