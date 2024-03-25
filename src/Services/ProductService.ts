import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { productActions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
    public async getAllProducts(): Promise<ProductModel[]> {
        //Check first if we have the products in global state:
        if (store.getState().products) return store.getState().products;
        const response = await axios.get<ProductModel[]>(appConfig.productsurl);
        const products = response.data;
        //save in global state:
        store.dispatch(productActions.initProducts(products));
        return products;
    }
    public async getOneProduct(id: number): Promise<ProductModel> {
        //if we have the product - get it from the global
        let product = store.getState().products?.find(p => p.id === id);
        if (product) return product;
        // if not - get it from backend
        const response = await axios.get<ProductModel>(appConfig.productsurl + id);
        product = response.data;
        return product;
    }
    public async addProduct(product: ProductModel): Promise<void> {
        //send product to backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; //send text and files
        const response = await axios.post<ProductModel>(appConfig.productsurl, product, options);
        const dbProduct = response.data;
        //add product to global state:
        store.dispatch(productActions.addProduct(dbProduct));
        console.log(dbProduct);
    }
    public async updateProduct(product: ProductModel): Promise<void> {
        //Update in backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; //send text and files
        const response = await axios.put<ProductModel>(appConfig.productsurl + product.id, product, options);
        const dbProduct = response.data;
        //Update product in global state:
        store.dispatch(productActions.updateProduct(dbProduct));
        console.log(dbProduct);
    }
    public async deleteProduct(id: number): Promise<void> { //send text and files
        //Delete in Backend:
        const response = await axios.delete<ProductModel>(appConfig.productsurl + id);
        const dbProduct = response;
        //Delete from global state
        store.dispatch(productActions.deleteProduct(id));
    }
}

export const productService = new ProductService();
