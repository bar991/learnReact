import { SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import "./AddProduct.css";

export function AddProduct(): JSX.Element {
    const { register, handleSubmit } = useForm<ProductModel>(); //לקחת רק את המשתנה.רגיסטר
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        product.image = (product.image as unknown as FileList)[0];
        await productService.addProduct(product);
        alert("Product has been added.")
        //Navigate to /Products
        navigate('/products');
        console.log(product);
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name")} />

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price")} /> {/*step enable to get double number 7.12*/}

                <label> Stock:</label>
                <input type="number" {...register("stock")} />

                <label>Image:</label>
                <input type="File" {...register("image")} />
                <button>Add</button>

            </form>
        </div>
    );
}
