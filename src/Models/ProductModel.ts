import { RegisterOptions } from "react-hook-form";

export class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

public static nameValidation: RegisterOptions =
{
    required: { value: true, message: "Missing name." },
    minLength: { value: 2, message: "Name to short." },
    maxLength: { value: 100, message: "Name too long" }

};
public static priceValidation: RegisterOptions =
{
    required: { value: true, message: "Missing price." },
    min: { value:0, message: "Price cannot be negative"},
    maxLength: { value: 1000, message: "Name too long" }
};
public static stockValidation: RegisterOptions =
{
    required: { value: true, message: "Missing stock name." },
    min: { value:0, message: "Price cannot be negative"},
    maxLength: { value: 1000, message: "Name too long" }

};
public static imageValidation: RegisterOptions =
{
    required: { value: true, message: "Missing image" },

};

}