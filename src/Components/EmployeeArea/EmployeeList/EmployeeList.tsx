import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

export function EmployeeList(): JSX.Element {
    useTitle("Employees | EmployeeList");

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
        useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmp => setEmployees(dbEmp))
            .catch(err => notify.error(err));

        }, []);

    return (
        <div className="EmployeeList">
			          <table>
                          <thead>
                              <tr>
                                  <th>First Name </th>
                                  <th>Last Name </th>
                                  <th>Country </th>
                                  <th>City </th>
                                  <th>birth Date </th>
                                  <th>Image </th>
                              </tr>
                          </thead>
                          <tbody>
                              {employees.map(e => <tr>
                              <td>{e.firstName} </td>
                              <td>{e.lastName} </td>
                              <td>{e.country} </td>
                              <td>{e.city} </td>
                              <td>{e.birthDate}</td>
                              <td>
                              <NavLink to={"/employees/" + e.id}>
                              <img src={e.imageUrl} />
                </NavLink>
                              </td>
                              </tr>)}
                          </tbody>
                      </table>
                      
            {employees.length ===0 && <Spinner />}
            {/*employees.map(e => <EmployeeCard key={e.id} employee={e} />)*/}
        </div>
    );
}
