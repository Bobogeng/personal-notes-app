import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import ROUTES from "../utils/routes";

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
            <div className="card-input">
                <h2>Login Page</h2>
                <div className="divide"></div>
                <LoginInput login={onLogin} />
                <div className="divide"></div>
                <p>
                    Belum punya akun? <Link to={ROUTES.REGISTER}>Daftar di sini.</Link>
                </p>
            </div>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
