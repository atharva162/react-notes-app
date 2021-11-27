import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ id, date, text, deleteNote}) {
    return (
        <>
        <div className="note-container">
        <span>{text}</span>
        <div className="footer">
        <div className="date">{date}</div>
        <div className="delete-button">
            <MdDeleteForever onClick={() => deleteNote(id)} size='1.3em' className='delete-icon'/>
        </div>
        </div>
        </div>
        </>                                                                                                                                                                                                                                                                                                   
    )
}

export default Note
