import React from 'react'
import NotesHeaderSearch from './NotesHeaderSearch'

const NotesHeader = ({search}) => {
  return (
    <div className='NotesHeader'>
        <h1>Notes App</h1>
        <NotesHeaderSearch search={search}/>
    </div>
  )
}

export default NotesHeader