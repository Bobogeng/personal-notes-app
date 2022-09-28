import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";

function AddPage() {
    const navigate = useNavigate();

    async function onAddHandler(data) {
        const { error } = await addNote(data);
        if (!error) {
            navigate("/");
        }
    }

    return (
        <div className="note-app">
            <NoteInput addNote={onAddHandler} />
        </div>
    );
}

export default AddPage;
