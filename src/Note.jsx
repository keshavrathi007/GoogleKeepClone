import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function handleClick() {
        props.deleteItem(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;