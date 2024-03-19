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
        const options = {headers: { "Content-Type": "multipart/form-data"}}; //send text and files
        const response = await axios.post<ProductModel>(appConfig.productsurl, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }
    public async updateProduct(product: ProductModel): Promise<void> {
        const options = {headers: { "Content-Type": "multipart/form-data"}}; //send text and files
        const response = await axios.put<ProductModel>(appConfig.productsurl+ product.id, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }
    public async deleteProduct(id: number): Promise<void> { //send text and files
        const response = await axios.delete<ProductModel>(appConfig.productsurl + id);
        const dbProduct = response;
        console.log(dbProduct);
    }
}

export const productService = new ProductService();
