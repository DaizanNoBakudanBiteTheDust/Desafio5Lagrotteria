import { productsModel } from "../fileManagers/dbManagers/models/models/products.models";

export default class Products {
    constructor(){
        console.log("db trabajando")
    }

    getAll = async () => {

        const products = await productsModel.find().lean();
        return products;
    }

    save = async (product) => {
        const result = await productsModel.create(product);
        return result;
    }
}
