import { configureStore, createSlice } from "@reduxjs/toolkit"
import { EmployeeModel } from "../Models/EmployeeModel";
import { ProductModel } from "../Models/ProductModel"
import { logger } from "./middleware";
import { addEmployee, addProduct, deleteEmployee, deleteProduct, initEmployees, initProducts, updateEmployee, updateProduct } from "./reducers";

export type AppState = {
    products: ProductModel[];
    employees: EmployeeModel[];
    //More global state here...(like employee and etc)
}
const slice = createSlice({
    name: "products",
    reducers: { initProducts, addProduct, updateProduct, deleteProduct },
    initialState: null
}
);
const employeeSlice = createSlice({
    name: "employees",
    reducers: { initEmployees, addEmployee, updateEmployee, deleteEmployee },
    initialState: null
}
);

//Action crreators - automatically generated from the reduces:
export const actions = slice.actions;
export const employeesactions = employeeSlice.actions;


//creating the store:
export const store = configureStore<AppState>({
    reducer: {
        products: slice.reducer,
        employees: employeeSlice.reducer,
        //customers: slice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any,
});
