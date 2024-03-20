import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./AddEmployee.css";

export function AddEmployee(): JSX.Element {
    useTitle("Employee | Add Employee");
    const { register, handleSubmit, formState } = useForm<EmployeeModel>(); //לקחת רק את המשתנה.רגיסטר
    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try{
        employee.image = (employee.image as unknown as FileList)[0];
        await employeeService.addEmployee(employee);
        notify.success("Employee has been added.");
        //Navigate to /Products
        navigate('/employees');

    }
catch (err: any){
    notify.error(err);
}
 }
    return (
        <div className="AddEmployee">
			 <form onSubmit={handleSubmit(send)}>
                <label>FirstName: </label>
                <input type="text" />
                <label>lastName: </label>
                <input type="text" />
                <label>country: </label>
                <input type="text" />
                <label>city: </label>
                <input type="text" />
                <label>birthdate: </label>
                <input type="text" />
               <label>Image:</label>
                <input type="File" />
              
                <button>Add</button>

                </form>
        </div>
    );
}
