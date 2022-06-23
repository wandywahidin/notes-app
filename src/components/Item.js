import React from 'react'
import ItemBody from './ItemBody'
import ItemButton from './ItemButton'
import ItemHeader from './ItemHeader'

const Item = ({title, body, created, id, archived, onDelete, onArsip}) => {
  return (
    <div className='Item'>
        <ItemHeader title={title} created={created}/>
        <ItemBody body={body} />
        <ItemButton id={id} onDelete={onDelete} onArsip={onArsip} archived={archived} />
    </div>
  )
}

export default Item