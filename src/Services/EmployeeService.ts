import axios from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { productActions, employeesactions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        //Check first if we have the employees in global state:
        if (store.getState().employees) { return store.getState().employees; }
        const response = await axios.get<EmployeeModel[]>(appConfig.employeeurl);
        const employees = response.data;
        //save in global state:
        store.dispatch(employeesactions.initEmployees(employees));
        return employees;
    }
    public async getOneEmployee(id: number): Promise<EmployeeModel> {
        //if we have the emloyee - get it from the global
        let employee = store.getState().employees?.find(e => e.id === id);
        if (employee) { return employee; }
        // if not - get it from backend
        const response = await axios.get<EmployeeModel>(appConfig.employeeurl + id);
        employee = response.data;
        return employee;
    }
    public async addEmployee(employee: EmployeeModel): Promise<void> {
        //send product to backend:
        const options = { headers: { "Content-Type": "multipart/form-data" } }; //send text and files
        const response = await axios.post<EmployeeModel>(appConfig.employeeurl, employee, options);
        const dbEmployee = response.data;
        //add product to global state:
        store.dispatch(employeesactions.addEmployee(dbEmployee));
    }
}

export const employeeService = new EmployeeService();
