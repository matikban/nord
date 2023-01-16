import { useDispatch } from "react-redux";
import { logout } from '../../redux/auth';
import { useNavigate } from "react-router-dom";
import "./logout.scss";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    const menu = document.querySelector(".js-nav");
    dispatch(logout());
    menu.classList.remove("active");
    navigate('/login');
  };

  return <button className="logout" onClick={handleLogout}>Logout</button>;
}
