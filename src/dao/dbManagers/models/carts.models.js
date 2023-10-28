import mongoose from "mongoose";

const cartsCollection = 'carts' // colleccion db

const cartsSchema = new mongoose.Schema({
    products: {
        type: Array,
        default: []
    }
})

export const cartsModel = mongoose.model(cartsCollection, cartsSchema)