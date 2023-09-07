import React, { useState } from 'react'
import { SingleCard } from './SingleCard'
import "./cards.css"
import { TableRow } from './TableRow'
export const Cards = () => {
const [view,setView] = useState("cards");
  const cardData = [
    {
        img:"https://cdn4.vectorstock.com/i/1000x1000/31/38/building-business-company-logo-vector-19953138.jpg",
        cName:"Discount Tadka Private Limited"
    },
    {
        img:"https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
        cName:"Satkar India Private Limited"
    },
    {
        img:"https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg",
        cName:"Branded Factory"
    },
    {
        img:"https://c8.alamy.com/comp/PXPBDW/building-logo-design-real-estate-company-logo-design-abstract-construction-logo-design-building-logo-design-PXPBDW.jpg",
        cName:"Agile Methodology"
    }
  ]  
  const handleView =(e)=>{
    //console.log(e.target.value)
    let option=e.target.value 
    setView(option)
  }
  return (
   <>
   <select id ="sel" onChange={handleView}>
    <option value="">Select View Format</option>
    <option value="table">Table</option>
   <option value="cards">Cards</option>
    </select>
    <h3 style={{textShadow:"0 0 3px navy"}}><i><ins>About Company's</ins></i></h3>
    { view=="cards"?(
         <div id ="cards">
            
            {
                cardData.map ( (card,i) => (
                // <SingleCard key={i} data={card}/>
                <SingleCard key={i} {...card}/>
             ))
            }
         </div>  
        ) :
    (
        <div id ="tabBox">
            {/* <h3 style={{textShadow:"0 0 3px navy"}}><i>About Company's</i></h3> */}
            {
            <table >
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         cardData.map ( (card,i) => (
                            <TableRow key={1} {...card}/>
                        ))
                    }
                </tbody>
            </table>
            }
        </div>
      
    )
    }
   </>
  )
}
