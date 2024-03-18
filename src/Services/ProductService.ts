import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
    public async getAllProducts(): Promise<ProductModel[]> {

        const response = await axios.get<ProductModel[]>(appConfig.productsurl);
        const products = response.data;
        console.log(response);
        return products;
    }
}

export const productService = new ProductService();
