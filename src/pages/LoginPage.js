import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import LocaleContext from "../contexts/LocaleContext";
import { login } from "../utils/network-data";
import ROUTES from "../utils/routes";

function LoginPage({ loginSuccess }) {
    const { locale } = useContext(LocaleContext);

    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
            <div className="card-input">
                <h2>{locale === "id" ? "Halaman Login" : "Login Page"}</h2>
                <div className="divide"></div>
                <LoginInput login={onLogin} />
                <div className="divide"></div>
                <p>
                    {locale === "id" ? "Belum punya akun?" : "Don't have account?"} <Link to={ROUTES.REGISTER}>{locale === "id" ? "Daftar di sini." : "Register here."}</Link>
                </p>
            </div>
        </section>
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
