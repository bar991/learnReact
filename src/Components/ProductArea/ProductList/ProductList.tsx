import { error } from "console";
import { useEffect, useLayoutEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export function ProductList(): JSX.Element {
    useTitle("Northwind | ProductList");
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        productService.getAllProducts().
            then(dbProducts => setProducts(dbProducts)).
            catch(err => notify.error(err));
    }, []);

    return (
        <div className="ProductList">

            {products.length ===0 && <Spinner />}
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
