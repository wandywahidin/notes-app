import React from 'react'

const ItemButtonAktif = ({id, onArsip}) => {
  return (
    <>
    <button  className='btn-aktif' onClick={() => onArsip(id)}>Kembalikan</button>
    </>
  )
}

export default ItemButtonAktif