import React from 'react'

export const TableRow = ({img,cName}) => {
  return (
    <tr className="columnData">
        <td><img src={img} width="30%" style ={{borderRadius: "35%" ,cursor:"pointer"}}/></td>
        <td>{cName}</td>
    </tr>
  )
}
