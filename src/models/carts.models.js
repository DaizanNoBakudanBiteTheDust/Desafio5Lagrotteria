import mongoose from "mongoose";


const messagesCollection = 'messages' // colleccion db
const cartsCollection = 'carts' // colleccion db

const cartsSchema = new mongoose.Schema({
    products: String,
    id: {
        type:Number,
        unique: true
    }
})

export const cartsModel = mongoose.model(cartsCollection)