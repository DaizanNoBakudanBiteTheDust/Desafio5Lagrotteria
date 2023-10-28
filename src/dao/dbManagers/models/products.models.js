import mongoose from "mongoose";

const productCollection = 'products' // colleccion db

const productsSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    precio: Number,
    status: Boolean,
    thumbnail: String,
    code: String,
    stock: Number,
    category: String
})

export const productsModel = mongoose.model(productCollection, productsSchema)