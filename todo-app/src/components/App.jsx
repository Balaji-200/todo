import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Loader from "./Loader";

const apiUrl = "http://localhost:8080/todo/";

function App() {
    const [notes, setNotes] = useState([])
    const [isLoading, setLoadingState] = useState(false)
    useEffect(() => {
        setLoadingState(true);
        fetch(apiUrl).then(response => response.json()).then(data => {
            setLoadingState(false);
            setNotes(data)
        })
    }, []);

    function addNote(newNote) {
        console.log(newNote)
        if (newNote.title === '' || newNote.description === '') {
            alert('Title and description cannot be empty')
            return
        }
        setLoadingState(true);
        fetch(apiUrl, {
            method: 'POST',
            mode:'cors',
            redirect:'follow',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newNote)
        }).then(response => response.json()).then(data => {
            setNotes(data);
            setLoadingState(false);
        }).catch(err => console.error(err));
    }

    function deleteNote(id) {
        setLoadingState(true);
        fetch(apiUrl + id, {
            method: 'DELETE',
            mode: 'cors',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setNotes(data);
            setLoadingState(false);
        }).catch(err => console.error(err));
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {
                isLoading ? <Loader/>
                    : notes.map((noteItem) => {
                        return (
                            <Note
                                key={noteItem._id}
                                id={noteItem._id}
                                title={noteItem.title}
                                description={noteItem.description}
                                onDelete={deleteNote}
                            />
                        );
                    })
            }
            <Footer/>
        </div>
    );
}

export default App;
