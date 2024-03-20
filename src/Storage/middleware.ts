import { configureStore, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { AppState, store } from "./store";

//IN 1 LINE
export const logger = (store: ReturnType<typeof configureStore>) => (next: Dispatch) => (action: PayloadAction) => {
    const result = next(action);

    console.log("Something Changed...Action: ", action);
    return result;
}
// //middleware: will be invoke automatically on every dispatch:
// export function logger(store: ReturnType<typeof configureStore>) {
//     return function (next: Dispatch) {
//         return function (action: PayloadAction) {
//             //State not changed yet.
//             const result = next(action); //Must call next for the dispatch to work
//             //state changed/
//             console.log("Something Changed...Action: ",action);
//             return result;
//         }
//     }

// }