import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeeurl);
        const employees = response.data;
        return employees;
    }
    public async getOneEmployee(id: number): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeeurl);
        const employee = response.data;
        console.log(response);
        return employee;
    }	
}

export const employeeService = new EmployeeService();
