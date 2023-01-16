import "./menu.scss";
import { NavLink } from "react-router-dom"
import LogoutButton from "../../Logout/Logout";

function Menu({ isAuthorized }) {
    const activeClassName = "active";

    return(
        <>
            <ul className="main-menu flex flex-wrap">
                <li>
                    <NavLink to="/" className={({ isActive }) =>isActive ? activeClassName : undefined}>
                        Main
                    </NavLink>
                </li>

                {!isAuthorized &&
                    <li>
                        <NavLink to="/login" className={({ isActive }) =>isActive ? activeClassName : undefined}>
                            Login
                        </NavLink>
                    </li>
                }
                {isAuthorized && (
                    <>
                        <li>
                            <NavLink to="/servers" className={({ isActive }) =>isActive ? activeClassName : undefined}>
                                Servers
                            </NavLink>
                        </li>
                        <li>
                            <LogoutButton />
                        </li>
                    </>
                )}
            </ul>
        </>
    )
}

export default Menu;
