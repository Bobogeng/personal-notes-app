import React from "react";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

function NoteApp({ locale, filteredNotes, isArchive, keyword, onSearchHandler }) {
    return (
        <div className="note-app">
            <div className="note-app__header">
                <h1 className="note-app__title">
                    {locale === "id" ? "Mulai mengambil" : "Start taking"} <span className="purple-text">{locale === "id" ? "Catatan!" : "Notes!"}</span>
                </h1>
                <NoteSearch keyword={keyword} onSearch={onSearchHandler} />
            </div>
            <div className="divide"></div>
            <div className="note-app__content">
                {isArchive ? (
                    <h2>
                        {locale === "id" ? "Catatan" : "Archive"} <span className="purple-text">{locale === "id" ? "Aktif" : "Notes"}</span>
                    </h2>
                ) : (
                    <h2>
                        {locale === "id" ? "Catatan" : "Active"} <span className="purple-text">{locale === "id" ? "Arsip" : "Notes"}</span>
                    </h2>
                )}
                <NoteList notes={filteredNotes} />
            </div>
        </div>
    );
}

export default NoteApp;
