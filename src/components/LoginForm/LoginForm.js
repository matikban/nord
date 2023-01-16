import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import InputWrapper from "../InputWrapper/InputWrapper";
import { loginSuccess, loginError } from '../../redux/auth';
import "./loginForm.scss";


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const isDisabled = !username || !password
    const errorMessage = "Wrong username or password. Please try again!";
    const succesMessage = "Success!";
    const dispatch = useDispatch();
    const navigate = useNavigate();


    async function handleLogin(e) {
        const url = "https://playground.tesonet.lt/v1/tokens";
        e.preventDefault();

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                setStatus("failure");
                throw new Error(`HTTP error, status = ${response.status}`);
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            setStatus("success");

            dispatch(loginSuccess());
            navigate('/servers');

        } catch (error) {
            dispatch(loginError());
        }
    }

    return(
        <form className="login-form">
            <InputWrapper
                className="login-form__field"
                id="username"
                type="test"
                placeholder="User name"
                label="User name"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <InputWrapper
                className="login-form__field"
                id="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            {status === "success" && <p className="success">{succesMessage}</p>}
            {status === "failure" && <p className="error">{errorMessage}</p>}

            <Button
                className={`button-purple ${isDisabled ? 'disabled' : ""}`}
                text="Login"
                onClick={(e) => handleLogin(e)}
            />
        </form>
    )
}

export default LoginForm;
