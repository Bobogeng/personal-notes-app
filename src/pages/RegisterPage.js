import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import ROUTES from "../utils/routes";

function RegisterPage() {
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
                <h2>Register Page</h2>
                <div className="divide"></div>
                <RegisterInput register={onRegisterHandler} />
                <div className="divide"></div>
                <p>
                    Kembali ke <Link to={ROUTES.LOGIN}>Masuk</Link>
                </p>
            </div>
        </section>
    );
}

export default RegisterPage;
