import React, { useContext } from "react";
import PropTypes from "prop-types";
import NoteItemCard from "./NoteItemCard";
import LocaleContext from "../contexts/LocaleContext";

function NoteList({ notes }) {
    const { locale } = useContext(LocaleContext);

    if (notes.length > 0) {
        return (
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItemCard key={note.id} id={note.id} {...note} />
                ))}
            </div>
        );
    } else {
        return <p className="note-list__empty-message">{locale === "id" ? "Tidak ada catatan" : "Notes not found"}</p>;
    }
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
};

export default NoteList;
