import React from "react";
import NotesBodyAktif from "./NotesBodyAktif";
import NotesBodyArsip from "./NotesBodyArsip";
import NotesBodyInput from "./NotesBodyInput";

const NotesBody = ({ Data, addNotes, onDelete, onArsip, search }) => {
  return (
    <div>
      <NotesBodyInput data={Data} addNotes={addNotes} />
      {Data.length === 0 ? (
        <h1>Tidak ada catatan</h1>
      ) : (
        <>
          <NotesBodyAktif data={Data} onDelete={onDelete} onArsip={onArsip} search={search} />
          <NotesBodyArsip data={Data} onDelete={onDelete} onArsip={onArsip} search={search} />
        </>
      )}
    </div>
  );
};

export default NotesBody;
