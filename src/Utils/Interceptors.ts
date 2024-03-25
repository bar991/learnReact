import axios from "axios";

class Interceptors {
    public registerInterceptors(): void {
        axios.interceptors.request.use(requestObject => {
            const token = localStorage.getItem("token");
            //if exists
            if(token){
                requestObject.headers.Authorization = "Bearer " + token;
            }
            //return request object:
            return requestObject;
        });
    }
}

export const interceptors = new Interceptors();
