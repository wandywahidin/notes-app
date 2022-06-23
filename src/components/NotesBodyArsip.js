import React from "react";
import Item from "./Item";

const NotesBodyArsip = ({ data, onDelete, onArsip, search }) => {
  const filterData = data.filter((dataFilter) => {
    if(search === '') {
      return dataFilter
    } else {
      return (dataFilter.title.toLowerCase().includes(search) || dataFilter.body.toLowerCase().includes(search))
    }
  })
  return (
    <div className="NotesBodyArsip">
      <h1>Arsip</h1>
      <div className="NotesArsip__body">
      {filterData.map((note) => {
        return note.archived ? (
          <Item
            title={note.title}
            body={note.body}
            id={note.id}
            key={note.id}
            created={note.createdAt}
            archived={note.archived}
            onDelete={onDelete}
            onArsip={onArsip}
            {...note}
          />
        ) : null;
      })}
      </div>
    </div>
  );
};

export default NotesBodyArsip;
