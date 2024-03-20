import { NavLink } from "react-router-dom";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="products" end>Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/employees/new">Add Employee</NavLink>
            <NavLink to="/employees" end>Employees</NavLink>
            <TotalProducts />
        </div>
    );
}
