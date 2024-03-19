import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./AddProduct.css";

export function AddProduct(): JSX.Element {
    useTitle("Northwind | Add Product");
    const { register, handleSubmit, formState } = useForm<ProductModel>(); //לקחת רק את המשתנה.רגיסטר
    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try{
        product.image = (product.image as unknown as FileList)[0];
        await productService.addProduct(product);
        notify.success("Product has been added.");
        //Navigate to /Products
        navigate('/products');
        console.log(product);
    }
catch (err: any){
    notify.error(err);
}
 }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name",ProductModel.nameValidation
                    // {
                    //     required: { value: true, message: "Missing name." },
                    //     minLength: { value: 2, message: "Name to short." },
                    //     maxLength: { value: 100, message: "Name too long" },

                    // }
                    )} />
                <span className="error"> {formState.errors?.name?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price",ProductModel.priceValidation)} /> 
                <span className="error"> {formState.errors?.price?.message}</span>
              
                <label> Stock:</label>
                <input type="number" {...register("stock",ProductModel.stockValidation)} />
                <span className="error"> {formState.errors?.stock?.message}</span>

                <label>Image:</label>
                <input type="File" {...register("image",ProductModel.imageValidation)} />
                <span className="error"> {formState.errors?.image?.message}</span>
                
                <button>Add</button>

                </form>
        </div>
    );
}
