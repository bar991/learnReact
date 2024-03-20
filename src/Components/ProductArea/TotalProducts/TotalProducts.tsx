import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState, store } from "../../../Storage/store";
import "./TotalProducts.css";

export function TotalProducts(): JSX.Element {
    // const [count, setCount] = useState<number>(0); //count start with 0

    // useEffect(() => {
    //     // setCount(store.getState().products?.length);
    //     const unsubscribe = store.subscribe(() => {
    //         setCount(store.getState().products?.length); //כאשר יש עדכון תקרא לפונקציה ותתן את המידע העדכני
    //     });
    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);

    // all in 1 line - Subscribe+ Unsubscribe + UseState +useEffect + subscribe only for that slice:(need to install react redux)
    const count = useSelector<AppState, number>(state => state.products?.length);
    if (!count) return null;

    return (
        <div className="TotalProducts">
            <span>Total Products: {count}</span>
        </div>
    );
}
