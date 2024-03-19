import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { EmployeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import "./EmployeeDetails.css";

export function EmployeeDetails(): JSX.Element {
    const [employee, setEmployee] = useState<EmployeeModel>();
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();
    useEffect(() => {
        EmployeeService.getOneEmployee(id)
            .then(dbEmployee => setEmployee(dbEmployee))
            .catch(err => notify.error(err));

    }, []);
    return (
        <div className="EmployeeDetails">
            <h3>id: {employee?.id}</h3>
            <h3>firstName: {employee?.firstName}</h3>
            <h3>lastName: {employee?.lastName}</h3>
            <h3>title: {employee?.title}</h3>
            <h3>country: {employee?.country}</h3>
            <img src={employee?.imageUrl} />
            <br /> <br />
            <NavLink to="/employee">Back</NavLink>

        </div>
    );
}
