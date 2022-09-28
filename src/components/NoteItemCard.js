import React from "react";
import parser from "html-react-parser";
import PropTypes from "prop-types";
import NoteItemContent from "./NoteItemContent";

function NoteItemCard({ id, title, body, createdAt }) {
    return (
        <div className="note-item">
            <NoteItemContent id={id} title={title} createdAt={createdAt} body={parser(body)} />
        </div>
    );
}

NoteItemCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemCard;
