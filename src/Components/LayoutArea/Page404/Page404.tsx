import { useTitle } from "../../../Utils/UseTitle";
import "./Page404.css";

export function Page404(): JSX.Element {
    useTitle("Northwind | Unknown Page");
    return (
        <div className="Page404">
			<p>The Page you are looking for doesn't exist</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
        </div>
    );
}
