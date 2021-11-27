import React, {useState} from 'react'

function AddNote({ addNote }) {
    const [noteText, setNoteText] = useState("");
    function handleSave(){
        if(noteText === ''){
            return alert('Please type any note to save');
        }
        addNote(noteText)
        setNoteText('');
    }
    function setNoteChange(e){
        if(200 - noteText.length < 1){
          return alert('You have reached maximum character count')
        }else{
            setNoteText(e.target.value);
        }
    }
    return (
        <>
        <div className="new-note">
        <textarea cols="10" rows="8" placeholder="Type to add a note..." value={noteText} onChange={setNoteChange} className="textarea">
        </textarea>
        <div className="newnote-footer">
         <small>{200 - noteText.length} remaining</small>
         <div className="save-button">
         <button onClick={handleSave}>Save</button>
         </div>
        </div>
        </div>
        </>
    )
}

export default AddNote
