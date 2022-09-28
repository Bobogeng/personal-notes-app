import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function NoteSearch({ keyword, onSearch }) {
    const { locale } = useContext(LocaleContext);
    const [search, setSearch] = useState(keyword);

    const onSearchChangeEventHandler = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="note-search">
            <input type="text" placeholder={locale === "id" ? "Cari catatan..." : "Search notes..."} value={search} onChange={onSearchChangeEventHandler} />
        </div>
    );
}

NoteSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default NoteSearch;
