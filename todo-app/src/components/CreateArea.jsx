import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        description: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            description: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />}
                <textarea
                    onClick={expand}
                    name="description"
                    onChange={handleChange}
                    value={note.description}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
