import {
    productsModel
} from "./models/products.models.js";

export default class Products {
    constructor() {
        console.log("db trabajando")
    }

    getAll = async () => {

        const products = await productsModel.find().lean();
        return products;
    }

    save = async (product) => {

        const existingProduct = await productsModel.findOne({
            code: product.code
        });

        if (existingProduct) {
            return res.status(409).send({
                status: 'error',
                error: 'El producto con este código ya existe.'
            });
        }
        // se agrega el producto

        const result = await productsModel.create(product);

        return result;
    }

}