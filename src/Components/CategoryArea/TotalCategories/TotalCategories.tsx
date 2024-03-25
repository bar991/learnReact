import { useEffect, useState } from "react";
import "./TotalCategories.css";
import { categoryService } from "../../../Services/CategoryService";
import { notify } from "../../../Utils/Notify";

export function TotalCategories(): JSX.Element {
    const [count, setCount] = useState<number>();
    useEffect(() => {

        categoryService.getTotalCategories().
            then(dbCount => setCount(dbCount)).
            catch(err => notify.error(err));
    }, []);

    return (
        <div className="TotalCategories">
            <span>Total Cataegories: {count}</span>
        </div>
    );
}
