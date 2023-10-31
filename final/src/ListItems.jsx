import React from 'react'

const ListItems = ({item}) => {
  // const {title, userId, id } = item
  // console.log(id);
  return (
    <li>
      {JSON.stringify(item)}
    </li>
  )
}

export default ListItems