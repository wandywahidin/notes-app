import React from 'react'

const ItemButtonDelete = ({id, onDelete}) => {
  return (
    <>
    <button className='btn-delete' onClick={() => onDelete(id)}>Delete</button>
    </>
  )
}

export default ItemButtonDelete