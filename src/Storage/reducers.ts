import { PayloadAction } from "@reduxjs/toolkit";
import { EmployeeModel } from "../Models/EmployeeModel";
import { ProductModel } from "../Models/ProductModel";
//init all products: currentstate will be empty because its the first time
export function initProducts(currentState: ProductModel[],
    action: PayloadAction<ProductModel[]>): ProductModel[] {
    // let newState = [...currentState];
    // newState = action.payload
    //return newState;
    return action.payload; //payload = product array.
}
//add one Product

export function addProduct(currentState: ProductModel[],
    action: PayloadAction<ProductModel>): ProductModel[] {
    // const productToAdd = action.payload; //Take Payload
    // const newState = {...currentState};// Duplicate current State
    // newState.push(productToAdd); //perform logic
    // return newState; //Return Current State
    return [...currentState, action.payload];//Payload is a Product.
}
export function updateProduct(currentState: ProductModel[],
    action: PayloadAction<ProductModel>): ProductModel[] {
// const newState = [...currentState];
// const index = newState.findIndex(p => p.id === action.payload.id); //Payload is a Product.
// if(index >=0) newState[index] = action.payload;
// return newState
return currentState.map(p => p.id === action.payload.id ? action.payload : p);
}
export function deleteProduct(currentState: ProductModel[],
    action: PayloadAction<number>): ProductModel[] {
     //   const index = newState.findIndex(p => p.id === action.payload); //Payload is an id
        return currentState.filter(p => p.id !== action.payload);

    }
    export function initEmployees(currentState: EmployeeModel[],
        action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
        // let newState = [...currentState];
        // newState = action.payload
        //return newState;
        return action.payload; //payload = product array.
    }
    //add one Product
    
    export function addEmployee(currentState: EmployeeModel[],
        action: PayloadAction<EmployeeModel>): EmployeeModel[] {
        // const productToAdd = action.payload; //Take Payload
        // const newState = {...currentState};// Duplicate current State
        // newState.push(productToAdd); //perform logic
        // return newState; //Return Current State
        return [...currentState, action.payload];//Payload is a Product.
    }
    export function updateEmployee(currentState: EmployeeModel[],
        action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    // const newState = [...currentState];
    // const index = newState.findIndex(p => p.id === action.payload.id); //Payload is a Product.
    // if(index >=0) newState[index] = action.payload;
    // return newState
    return currentState.map(p => p.id === action.payload.id ? action.payload : p);
    }
    export function deleteEmployee(currentState: EmployeeModel[],
        action: PayloadAction<number>): EmployeeModel[] {
         //   const index = newState.findIndex(p => p.id === action.payload); //Payload is an id
            return currentState.filter(p => p.id !== action.payload);
    
        }
