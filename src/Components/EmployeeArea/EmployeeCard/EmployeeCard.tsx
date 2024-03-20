import { NavLink } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./EmployeeCard.css";

//בניית type
type EmployeeCardProps = {
    employee: EmployeeModel;
}
export function EmployeeCard(props: EmployeeCardProps): JSX.Element {
    return (
        <div className="EmployeeCard">
            <div>
                <span>FirstName:{props.employee.firstName}</span>
                <span>LastName:{props.employee.lastName}</span>
                <span>Country:{props.employee.country}</span>
                <span>City:{props.employee.city}</span>
                <span>birthDate:{props.employee.birthDate}</span>
            </div>
            <div>
                <NavLink to={"/employees/" + props.employee.id}>
                    <img src={props.employee.imageUrl} />
                </NavLink>
            </div>
            </div>
            );
}
