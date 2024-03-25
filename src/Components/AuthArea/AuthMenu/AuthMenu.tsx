import { UserModel } from "../../../Models/UserModel";
import { AppState } from "../../../Storage/store";
import "./AuthMenu.css";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";
import { useSelector } from "react-redux";

export function AuthMenu(): JSX.Element {
    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate = useNavigate();
    function logout(): void {
        authService.logout();
        notify.success("Bye");
        navigate("/home");
    }
    if (!user) {
        return (
            <div className="AuthMenu">
                <span>Hello Guest</span>
                <NavLink to="/login">Login</NavLink>
                <span> |</span>
                <NavLink to="/register">Register</NavLink>
            </div>
        );
    }
    return (
        <div className="AuthMenu">
        <span>Hello {user.firstName} {user.lastName} | </span>
        <NavLink to= "#" onClick={logout}>Logout</NavLink>
        </div>
    );

}
