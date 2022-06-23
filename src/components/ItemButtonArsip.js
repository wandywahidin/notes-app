import React from "react";

const ItemButtonArsip = ({ id, onArsip }) => {
  return (
    <>
      <button className="btn-arsip" onClick={() => onArsip(id)}>Arsipkan</button>
    </>
  );
};

export default ItemButtonArsip;
