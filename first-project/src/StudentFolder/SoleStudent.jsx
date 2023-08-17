import React from 'react'

export const SoleStudent = ({id, email, first_name, last_name, avatar}) => {
  return (
    <div className='sInfo'>
        <h2>{id}</h2>
        <img src={avatar}/>
        <h4>{first_name} {last_name}</h4> 
        <h4>{email}</h4>
    </div>
  )
}
