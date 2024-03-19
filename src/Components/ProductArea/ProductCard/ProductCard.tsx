import { NavLink } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";

//בניית type
type ProductCardProps = {
    product: ProductModel;
}
export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
            <div>
                <span>{props.product.name}</span>
                <span>Price:{props.product.price}</span>
                <span>Stock:{props.product.stock}</span>

            </div>
            <div>
                <NavLink to={"/products/" + props.product.id}>
                    <img src={props.product.imageUrl} />
                </NavLink>
            </div>
        </div>
    );
}
