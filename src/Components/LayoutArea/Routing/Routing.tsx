import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { addEmployee } from "../../../Storage/reducers";
import { AddEmployee } from "../../EmployeeArea/AddEmployee/AddEmployee";
import { EmployeeDetails } from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
// import { EmployeeDetails } from "../../EmployeeArea/EmployeeDetails/EmployeeDetails";
// import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
// import { About } from "../../AboutArea/About/About";
import { Home } from "../../HomeArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { Register } from "../../AuthArea/Register/Register";
import { Login } from "../../AuthArea/Login/Login";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";

export function Routing(): JSX.Element {
    //Describe where the about component located:
    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));
    // Load about ccomponent only when Browsing to "/about route:
    const SuspendsAbout = <Suspense fallback={<Spinner />}><LazyAbout /></Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={SuspendsAbout} />
                <Route path="/products/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/employees/" element={<EmployeeList />} />
                <Route path="/employees/:id" element={<EmployeeDetails />} />
                <Route path="/employees/new" element={<AddEmployee />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
