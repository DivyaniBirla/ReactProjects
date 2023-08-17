import React from 'react'

export const SingleCard = ({img, cName}) => {
    //console.log(data)
  return (
    <div id ="sCard">
        <img src={img} width ="20%"/>
        < h4 >{cName}</h4>
    </div>
  )
}
