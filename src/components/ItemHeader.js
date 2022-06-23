import React from 'react'
import { showFormattedDate } from '../utils'

const ItemHeader = ({title, created}) => {
  return (
    <div className='ItemHeader'>
        <h1>{title.toUpperCase()}</h1>
        <h5>{showFormattedDate(created)}</h5>
    </div>
  )
}

export default ItemHeader