import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode"; // npm i jwt-decode
import { authActions, store } from "../Storage/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class AuthService {
    public constructor() {
        //get token from local storage if exist
        const token = localStorage.getItem("token");
        //if exists:
        if(token){
            const container = jwtDecode<{ user: UserModel }>(token); // in the token (user,time)
            // Extract token user:
            const dbUser = container.user;
            //Save to global state
            store.dispatch(authActions.login(dbUser));
        }
    }
    //Register
    public async register(user: UserModel): Promise<void> {
        //send user to backend, get back token;
        const response = await axios.post<string>(appConfig.registerurl, user);
        //Extract token;
        const token = response.data;
        //Save token to local storage
        localStorage.setItem("token", token);
        console.log(token);
        //Extract container
        const container = jwtDecode<{ user: UserModel }>(token); // in the token (user,time)
        // Extract token user:
        const dbUser = container.user;
        //Save to global state
        store.dispatch(authActions.register(dbUser));
    }


    //Login
    public async login(credentials: CredentialsModel): Promise<void> {
        //send user to backend, get back token;
        const response = await axios.post<string>(appConfig.loginurl, credentials);
        //Extract token;
        const token = response.data;
        //Save token to local storage
        localStorage.setItem("token", token);
        //Extract container
        const container = jwtDecode<{ user: UserModel }>(token); // in the token (user,time)
        // Extract token user:
        const dbUser = container.user;
        //Save to global state
        store.dispatch(authActions.login(dbUser));
    }

    //Logout
    public logout(): void {
        //Remove User From global storage
        store.dispatch(authActions.logout());
        //remove token from local storage
        localStorage.removeItem("token");
    }

}

export const authService = new AuthService();
