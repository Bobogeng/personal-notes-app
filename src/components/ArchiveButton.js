import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

function ArchiveButton({ id, isArchive, onArchive, onUnarchive }) {
    const { locale } = useContext(LocaleContext);

    if (!isArchive) {
        return (
            <button className="note-item__archive" onClick={() => onArchive(id)}>
                {locale === "id" ? "Arsip" : "Archive"}
            </button>
        );
    } else {
        return (
            <button className="note-item__archive" onClick={() => onUnarchive(id)}>
                {locale === "id" ? "Aktif" : "Active"}
            </button>
        );
    }
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    isArchive: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
