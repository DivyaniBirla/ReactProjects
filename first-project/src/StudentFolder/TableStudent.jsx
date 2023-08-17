import React from 'react'

export const TableStudent = ({id, email, first_name, last_name, avatar}) => {
  return (
    <tr>
      <td style ={{width:"10%"}}>{id}</td>
      <td style ={{width:"15%"}}>{email}</td>
      <td style ={{width:"20%"}}>{first_name}</td>
      <td style ={{width:"20%"}}>{last_name}</td>
      <td style ={{width:"10%"}}><img style ={{borderRadius: "50%" ,cursor:"pointer"}} src={avatar} width="100%"/></td>
    </tr>
  )
}
