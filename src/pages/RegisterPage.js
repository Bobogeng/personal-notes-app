import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";
import { register } from "../utils/network-data";
import ROUTES from "../utils/routes";

function RegisterPage() {
    const { locale } = useContext(LocaleContext);
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate("/");
        }
    }

    return (
        <section className="register-page">
            <div className="card-input">
                <h2>{locale === "id" ? "Halaman Register" : "Register Page"}</h2>
                <div className="divide"></div>
                <RegisterInput register={onRegisterHandler} />
                <div className="divide"></div>
                <p>
                    {locale === "id" ? "Kembali ke" : "Back to"} <Link to={ROUTES.LOGIN}>Login</Link>
                </p>
            </div>
        </section>
    );
}

export default RegisterPage;
