import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button name="deleteButton" aria-label="delete button" onClick={handleClick}><DeleteIcon aria-label="delete button"/></button>
        </div>
    );
}

export default Note;
