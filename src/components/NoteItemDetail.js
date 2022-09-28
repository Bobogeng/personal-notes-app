import React, { useContext } from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "../utils/index";

function NoteItemDetail({ id, title, body, createdAt, isArchive, onArchive, onUnarchive, onDelete }) {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="note-item__detail">
            <div>
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__created-at">{locale === "id" ? showFormattedDate(createdAt, "id-ID") : showFormattedDate(createdAt, "en-EN")}</p>
            </div>
            <div className="divide"></div>
            <p className="note-item__detailbody">{parser(body)}</p>
            <div className="divide"></div>
            <div className="note-item__action">
                <ArchiveButton id={id} isArchive={isArchive} onArchive={onArchive} onUnarchive={onUnarchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

NoteItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isArchive: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteItemDetail;
