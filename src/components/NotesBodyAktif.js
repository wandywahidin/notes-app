import React from "react";
import Item from "./Item";

const NotesBodyAktif = ({ data, onDelete, onArsip,search }) => {
  const filterData = data.filter((dataFilter) => {
    if(search === '') {
      return dataFilter
    } else {
      return (dataFilter.title.toLowerCase().includes(search) || dataFilter.body.toLowerCase().includes(search))
    }
  })
  return (
    <div className="NotesBodyAktif">
      <h1>Catatan Aktif</h1>
      <div className="NotesAktif__body">
      {filterData.map((note) => {
        return note.archived ? null : (
          <Item
            title={note.title}
            body={note.body}
            id ={note.id}
            key={note.id}
            created={note.createdAt}
            archived={note.archived}
            onDelete={onDelete}
            onArsip={onArsip}
            {...note}
          />
        );
      })}
      </div>
    </div>
  );
};

export default NotesBodyAktif;
