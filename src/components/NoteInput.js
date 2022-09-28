import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteInput({ addNote }) {
    const { locale } = useContext(LocaleContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChangeEventHandler = (event) => {
        setTitle(event.target.value.slice(0, 50));
    };

    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.innerHTML);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        addNote({ title, body });
    };

    return (
        <div className="note-input">
            <div className="note-input__header">
                <h2>
                    {locale === "id" ? "Membuat catatan" : "Create a new"} <span className="purple-text">{locale === "id" ? "Baru" : "Note"}</span>
                </h2>
                <p>
                    {locale === "id" ? "Sisa karakter:" : "Remaining characters:"} <span>{50 - title.length}</span>
                </p>
            </div>
            <form className="contact-input" onSubmit={onSubmitEventHandler}>
                <input className="note-input__title" type="text" placeholder={locale === "id" ? "Judul catatan..." : "Note title..."} value={title} onChange={onTitleChangeEventHandler} required />
                <div className="note-input__body" data-placeholder={locale === "id" ? "Tuliskan catatanmu disini..." : "Write your note here..."} onInput={onBodyChangeEventHandler} contentEditable></div>
                <button type="submit">{locale === "id" ? "Buat" : "Add"}</button>
            </form>
        </div>
    );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NoteInput;
