import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteApp from "../components/NoteApp";
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePage() {
    const { locale } = useContext(LocaleContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get("keyword");
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return title || "";
    });

    const onSearchHandler = (text) => {
        setSearchParams({ keyword: text });
        setKeyword(text);
    };

    const filteredNotes = notes.filter((note) => note.archived && note.title.toLowerCase().includes(keyword.toLowerCase()));

    useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, [notes]);

    return <NoteApp locale={locale} filteredNotes={filteredNotes} isArchive={true} keyword={keyword} onSearchHandler={onSearchHandler} />;
}

export default ArchivePage;
