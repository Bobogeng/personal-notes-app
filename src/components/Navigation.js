import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ToogleTheme";
import ROUTES from "../utils/routes";

function Navigation({ logout }) {
    const { locale, onLocaleChange } = useContext(LocaleContext);
    const { theme, onThemeChange } = useContext(ThemeContext);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav>
            <div className="navigation__header">
                <ul className="navigation">
                    <li className="navigation__home">
                        <Link to={ROUTES.HOME}>{locale === "id" ? "Aplikasi Catatan Pribadi" : "Personal Notes App"}</Link>
                    </li>
                </ul>
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <BiMenuAltRight size={24} />
                </button>
            </div>
            <div className={isNavExpanded ? "divide exist" : "divide"}></div>
            <ul className={isNavExpanded ? "navigation expanded" : "navigation"}>
                <li className="navigation__add">
                    <Link to={ROUTES.ADD}>{locale === "id" ? "Tambah Catatan" : "Add Notes"}</Link>
                </li>
                <li className="navigation__archive">
                    <Link to={ROUTES.ARCHIVE}>{locale === "id" ? "Arsip" : "Archive"}</Link>
                </li>
                <div className="vertical-divide"></div>
                <div className="navigation__icons">
                    <li className="navigation__locale" onClick={onLocaleChange}>
                        <BsTranslate size={18} />
                    </li>
                    <li className="navigation__theme">{theme === "light" ? <FaMoon size={18} onClick={onThemeChange} /> : <FaSun size={18} onClick={onThemeChange} />}</li>
                </div>
                <div className={isNavExpanded ? "divide exist" : "divide"}></div>
                <li className="navigation__logout">
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
};

export default Navigation;
