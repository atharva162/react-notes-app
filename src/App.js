import React, {useState} from 'react'
import NotesList from './components/NotesList'
import SearchNote from './components/SearchNote'

function App() {
   const [notes, setNotes] = useState([
      {
         id: 1,
         text: 'My first note',
         date: '10/12/12'
      },
      {
         id: 2,
         text: 'My second note',
         date: '12/12/2018'
      }
   ])
   const [filtertext, setFiltertext] = useState('');
   function addNote(text){
    
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()

     const newNoteObj = {
         id: 3,
         text: text,
         date: day + "/" + month + "/" + year 
      }
    const newNotesObj = [...notes, newNoteObj]
      setNotes(newNotesObj);
   }
   function deleteNote(id){
      const newNote = notes.filter((note) => note.id !== id)
      setNotes(newNote);
   }
   return (
      <>
      <h1>Notes App</h1>
      <SearchNote setSearchText={setFiltertext} />
      <NotesList notes={notes.filter((note)=> 
       note.text.includes(filtertext)  
       )} 
      addNote={addNote} 
      deleteNote={deleteNote}/>
      </>
   )
}

export default App
