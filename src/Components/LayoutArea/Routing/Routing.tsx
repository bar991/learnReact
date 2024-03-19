import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
// import { About } from "../../AboutArea/About/About";
import { Home } from "../../HomeArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";

export function Routing(): JSX.Element {
    //Describe where the about component located:
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));
    // Load about ccomponent only when Browsing to "/about route:
    const SuspendsAbout = <Suspense fallback={<Spinner />}><LazyAbout /></Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={SuspendsAbout} />
                <Route path="/products/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
