import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { showFormattedDate } from "../utils/index";

function NoteItemContent({ id, title, body, createdAt }) {
    const { locale } = useContext(LocaleContext);

    return (
        <div className="note-item__content">
            <div>
                <Link to={`/notes/${id}`}>
                    <h3 className="note-item__title">{title}</h3>
                </Link>
                <p className="note-item__created-at">{locale === "id" ? showFormattedDate(createdAt, "id-ID") : showFormattedDate(createdAt, "en-EN")}</p>
            </div>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemContent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemContent;
