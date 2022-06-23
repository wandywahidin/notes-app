import React from 'react'
import ItemButtonAktif from './ItemButtonAktif'
import ItemButtonArsip from './ItemButtonArsip'
import ItemButtonDelete from './ItemButtonDelete'

const ItemButton = ({id, onDelete, archived, onArsip}) => {
  return (
    <div className='ItemButton'>
        {
            archived ? (
                <>
                <ItemButtonDelete id={id} onDelete={onDelete}/>
                <ItemButtonAktif id={id} onArsip={onArsip}/>
                </>
            ) : (
                <>
                <ItemButtonArsip  id={id} onArsip={onArsip}/>
                <ItemButtonDelete id={id} onDelete={onDelete}/>
                </>
            )
        }
    </div>
  )
}

export default ItemButton