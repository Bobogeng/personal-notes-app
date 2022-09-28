import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import NoteItemDetail from "../components/NoteItemDetail";
import useHandlerDetail from "../hooks/useHandlerDetail";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/network-data";

function DetailPage() {
    const { id } = useParams();
    const [initializing, setInitializing] = useState(true);
    const [note, setNote] = useState({
        "id": "",
        "title": "",
        "body": "",
        "createdAt": "",
        "archived": false,
        "owner": "",
    });
    const [onArchiveHandler] = useHandlerDetail(() => archiveNote(id));
    const [onUnarchiveHandler] = useHandlerDetail(() => unarchiveNote(id));
    const [onDeleteHandler] = useHandlerDetail(() => deleteNote(id));

    useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
            setInitializing(false);
        });
    }, [id]);

    if (initializing) {
        return null;
    }
    if (!note) {
        return <Navigate to="/404-page-not-found" />;
    } else {
        return (
            <div className="note-app">
                <NoteItemDetail onDelete={onDeleteHandler} isArchive={note.archived} onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler} {...note} />
            </div>
        );
    }
}

export default DetailPage;
