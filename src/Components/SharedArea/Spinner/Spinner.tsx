import "./Spinner.css";
import imageLoading from "../../../Assets/Images/loading.jpg"
export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={imageLoading} />
        </div>
    );
}
