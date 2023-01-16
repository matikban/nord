import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import { useSelector } from 'react-redux'

import logoIcon from "../../assets/images/logo-tesoservers.svg";

import "./navigation.scss"
import { useRef } from 'react';

function Navigation() {
    const menuRef = useRef();
    const isAuthorized = useSelector(state => state.auth.isAuthorized);

    const mobileMenuToggler = () => {
        menuRef.current.classList.toggle("active");

        const links = document.querySelectorAll(".main-menu li a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                menuRef.current.classList.remove("active");
            })
        })
    }
    return(
        <div className="main-nav flex align-center space-between js-nav" ref={menuRef}>
            <Logo
                src={logoIcon}
                title="TesoServers Logo"
                redirect="/"
            />
            <Menu isAuthorized={isAuthorized} />
            <div className="js-burger mobile-nav" onClick={mobileMenuToggler}></div>
        </div>
    )
}

export default Navigation;
