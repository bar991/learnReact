import "./Spinner.css";
import imageLoading from "../../../Assets/Images/Loading_icon.gif"
export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={imageLoading} />
        </div>
    );
}
