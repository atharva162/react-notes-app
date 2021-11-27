import React from 'react'

function SearchNote({ setSearchText }) {
    return (
        <div className="search">
            <textarea className="text-search" cols="30" rows="2" placeholder="Search note..." onChange={(e)=> setSearchText(e.target.value)}></textarea>
        </div>
    )
}

export default SearchNote
