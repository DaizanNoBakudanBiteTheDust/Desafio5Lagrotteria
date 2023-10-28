import mongoose from "mongoose";

const messagesCollection = 'messages' // colleccion db

const messagesSchema = new mongoose.Schema({
    products: {
        type: Array,
        default: []
    }
})

export const cartsModel = mongoose.model(messagesCollection. messagesSchema)