import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import Button from "@material-ui/core/Button"
import Add from '@material-ui/icons/Add';
import { useState } from 'react';
const Createnote = (props) => {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const inputEvent = (event) => {
        const value = event.target.value
        const name = event.target.name
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(value, name)
    }
    const addEvent = (event) => {
        props.passNote(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault()
    }

    const expandIt = () => {
        setExpand(true)
    }

    const backToNormal = () => {
        setExpand(false)
    }

    return (<>
        <div onDoubleClick={backToNormal}>
            <form className="create-note">
                {expand ?
                    <input type="text" placeholder="Enter title" name="title" autoComplete="off" onChange={inputEvent} value={note.title} /> : null}
                <textarea rows="" column="" placeholder="write a note..." name="content" onChange={inputEvent} value={note.content} onClick={expandIt} />
                {expand ?
                    <button onClick={addEvent}>
                        <AddIcon />
                    </button> : null}
            </form>
        </div>
    </>)
}
export default Createnote