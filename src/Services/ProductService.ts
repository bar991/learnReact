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
    public async getOneProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsurl + id);
        const product = response.data;
        return product;
    }
    public async addProduct(product: ProductModel): Promise<void> {
        const response = await axios.post<ProductModel>(appConfig.productsurl, product);
        const dbProduct = response.data;
        console.log(dbProduct);
    }
}

export const productService = new ProductService();
