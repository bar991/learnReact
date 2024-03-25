import { configureStore, createSlice } from "@reduxjs/toolkit"
import { EmployeeModel } from "../Models/EmployeeModel";
import { ProductModel } from "../Models/ProductModel"
import { logger } from "./middleware";
import { addEmployee, addProduct, deleteEmployee, deleteProduct, initEmployees, initProducts, login, logout, register, updateEmployee, updateProduct } from "./reducers";
import { UserModel } from "../Models/UserModel";

export type AppState = {
    products: ProductModel[];
    employees: EmployeeModel[];
    user: UserModel;
    //More global state here...(like employee and etc)
}
const productsSlice = createSlice({
    name: "products",
    reducers: { initProducts, addProduct, updateProduct, deleteProduct },
    initialState: null
}
);
const employeeSlice = createSlice({
    name: "employees",
    reducers: { initEmployees, addEmployee, updateEmployee, deleteEmployee },
    initialState: null
});
const authSlice = createSlice({
    name: "auth",
    reducers: { register, login, logout },
    initialState: null
}
);

//Action crreators - automatically generated from the reduces:
export const productActions = productsSlice.actions;
export const employeesactions = employeeSlice.actions;
export const authActions = authSlice.actions;



//creating the store:
export const store = configureStore<AppState>({
    reducer: {
        products: productsSlice.reducer,
        employees: employeeSlice.reducer,
        user: authSlice.reducer
        //customers: slice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any,
});
