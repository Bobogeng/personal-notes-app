import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import NoteFooter from "./components/NoteFooter";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/LoginPage";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ToogleTheme";
import useToggle from "./hooks/useToggle";
import { getUserLogged, putAccessToken } from "./utils/network-data.js";
import ROUTES from "./utils/routes";

function App() {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [locale, onLocaleChange] = useToggle("id", "en", "locale");
    const [theme, onThemeChange] = useToggle("light", "dark", "theme");

    const localeValue = useMemo(() => {
        return {
            locale,
            onLocaleChange,
        };
    }, [locale, onLocaleChange]);

    const themeValue = useMemo(() => {
        return {
            theme,
            onThemeChange,
        };
    }, [theme, onThemeChange]);

    const onLoginSuccess = ({ accessToken }) => {
        putAccessToken(accessToken);
        getUserLogged().then(({ data }) => {
            setAuthedUser(data);
        });
    };

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken("");
    };

    useEffect(() => {
        getUserLogged().then(({ data }) => {
            setAuthedUser(data);
            setInitializing(false);
        });
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    if (initializing) {
        return null;
    }
    if (authedUser === null) {
        return (
            <LocaleProvider value={localeValue}>
                <ThemeProvider value={themeValue}>
                    <main>
                        <Routes>
                            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                            <Route path={ROUTES.LOGIN} element={<LoginPage loginSuccess={onLoginSuccess} />} />
                            <Route path={ROUTES.ALL} element={<Navigate to="/login" />} />
                        </Routes>
                        <NoteFooter />
                    </main>
                </ThemeProvider>
            </LocaleProvider>
        );
    }
    return (
        <LocaleProvider value={localeValue}>
            <ThemeProvider value={themeValue}>
                <header>
                    <Navigation logout={onLogout} />
                </header>
                <main>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<HomePage />} />
                        <Route path={ROUTES.ADD} element={<AddPage />} />
                        <Route path={ROUTES.ARCHIVE} element={<ArchivePage />} />
                        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                        <Route path={ROUTES.DETAIL} element={<DetailPage />} />
                        <Route path={ROUTES.NOTFOUND} element={<PageNotFound />} status={404} />
                        <Route path={ROUTES.LOGIN} element={<Navigate to={ROUTES.HOME} />} />
                        <Route path={ROUTES.ALL} element={<Navigate to={ROUTES.NOTFOUND} />} />
                    </Routes>
                    <NoteFooter />
                </main>
            </ThemeProvider>
        </LocaleProvider>
    );
}

export default App;
