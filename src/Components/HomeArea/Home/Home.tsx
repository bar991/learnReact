import "./Home.css";
import image1 from "../../../Assets/Images/icecream.jpg"
import image2 from "../../../Assets/Images/barbershop.jpg"

export function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={image1} />
        </div>
    );
}
