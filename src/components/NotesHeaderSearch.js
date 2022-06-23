import React from "react";

const NotesHeaderSearch = ({ search }) => {
  return (
    <>
      <input
        onChange={search}
        className="NotesHeaderSearch"
        type="text"
        placeholder="Cari catatan"
      />
    </>
  );
};

export default NotesHeaderSearch;
