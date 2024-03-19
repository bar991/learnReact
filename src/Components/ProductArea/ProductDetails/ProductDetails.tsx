import { get } from "http";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductDetails.css";

export function ProductDetails(): JSX.Element {
    const [product, setProduct] = useState<ProductModel>();
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProduct => setProduct(dbProduct));

    }, []);

    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br /> <br />
            <NavLink to="/products">Back</NavLink>
        </div>
    );
}
