import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ProductModel } from "../Models/ProductModel"
import { logger } from "./middleware";
import { addProduct, deleteProduct, initProducts, updateProduct } from "./reducers";

export type AppState = {
    products: ProductModel[];
    //More global state here...(like employee and etc)
}
const slice = createSlice({
    name: "productts",
    reducers: { initProducts, addProduct, updateProduct, deleteProduct },
    initialState: null
});

//Action crreators - automatically generated from the reduces:
export const actions = slice.actions;

//creating the store:
export const store = configureStore<AppState>({
reducer: {products: slice.reducer
//employees: slice.reducer,
//customers: slice.reducer
},
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any, 
}); 
