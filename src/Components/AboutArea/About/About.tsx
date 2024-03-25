import { useEffect } from "react";
import { useTitle } from "../../../Utils/UseTitle";
import { Tune } from "../Tune/Tune";
import "./About.css";
import { TotalCategories } from "../../CategoryArea/TotalCategories/TotalCategories";

export default function About(): JSX.Element {
    useTitle("Northwind | About");
    return (
        <div className="About">
		<Tune />
        <TotalCategories />
        </div>
    );
}
