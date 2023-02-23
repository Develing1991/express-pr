import mongoose from "mongoose";

const starbucksSchema = new mongoose.Schema({
    name: String,
    img: String,
})

export const StarBucks = mongoose.model('StarBucks',starbucksSchema)