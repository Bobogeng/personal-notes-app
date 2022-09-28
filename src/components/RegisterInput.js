import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput();
    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [passwordConfirm, onPasswordConfirmChange] = useInput();
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            window.alert("Confirm password is not matched");
            return;
        }

        register({
            name: name,
            email: email,
            password: password,
        });
    };

    useEffect(() => {
        if (password !== passwordConfirm) {
            setPasswordConfirmError("input-error");
        }
        return () => {
            setPasswordConfirmError("");
        };
    }, [password, passwordConfirm]);

    return (
        <form onSubmit={onSubmitEventHandler} className="register-input">
            <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" minLength={6} autoComplete="current-password" value={password} onChange={onPasswordChange} />
            <input className={passwordConfirmError} type="password" placeholder="Password Confirm" minLength={6} autoComplete="current-password" value={passwordConfirm} onChange={onPasswordConfirmChange} />
            <button>Register</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
