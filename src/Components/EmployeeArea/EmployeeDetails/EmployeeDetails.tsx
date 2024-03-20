import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import "./EmployeeDetails.css";

export function EmployeeDetails(): JSX.Element {
    const [employee, setEmployee] = useState<EmployeeModel>();
    const params = useParams();
    const id = +params.id;
    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(dbProduct => setEmployee(dbProduct))
            .catch(err => notify.error(err));

    }, []);
    return (
        <div className="EmployeeDetails">
            {!employee && <Spinner />}

            <h3>firstName: {employee?.firstName}</h3>
            <h3>lastName: {employee?.lastName}</h3>
            <h3>country: {employee?.country}</h3>
            <h3>city: {employee?.city}</h3>
            <h3>birthDate: {employee?.birthDate}</h3>
            <img src={employee?.imageUrl} />
            <br /> <br />
            <NavLink to="/employees">Back</NavLink>
            <span> </span>
            <br /> <br />
            <NavLink to={"/employees/edit/" + employee?.id}>Update Employee</NavLink>
        </div>
    );
}
