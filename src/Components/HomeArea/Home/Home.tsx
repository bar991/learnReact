import "./Home.css";
import image1 from "../../../Assets/Images/icecream.jpg"
import image2 from "../../../Assets/Images/israel.jpg"
import { useEffect } from "react";
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {
useTitle("Northwind | Home");
    return (
        <div className="Home">
			<img src={image2} />
        </div>
    );
}
