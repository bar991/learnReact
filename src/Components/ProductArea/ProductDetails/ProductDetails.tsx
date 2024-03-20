import { get } from "http";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductDetails.css";

export function ProductDetails(): JSX.Element {

    const [product, setProduct] = useState<ProductModel>();
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();
    useEffect(() => {
        productService.getOneProduct(id)
            .then(dbProduct => setProduct(dbProduct))
            .catch(err => notify.error(err));

    }, []);
    async function deleteMe() {
        try {
            const sure = window.confirm("Are you Sure?");
            if (!sure) return;
            await productService.deleteProduct(id);
            notify.success("Product has been deleted")
            navigate("/products")
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="ProductDetails">
            {!product && <Spinner />}

            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <br /> <br />
            <NavLink to="/products">Back</NavLink>
            <span> </span>
            <br /> <br />
            <NavLink to={"/products/edit/" + product?.id}>Update Product</NavLink>
            <span> </span>
            <br /> <br />
            <NavLink to="/products" onClick={deleteMe}>Delete Product</NavLink>
        </div>
    );
}
