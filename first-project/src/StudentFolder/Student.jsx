import React from 'react'
import "./students.css"
import { SoleStudent } from './SoleStudent'
import { TableStudent } from './TableStudent'
import { useState } from 'react'
export const Student = () => {
    const [show,setShow] =useState(false)
    const [type,setType] = useState("");
    const studentData=[
        {
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 2,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 4,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 5,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 6,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ]
    const keys = Object.keys(studentData[0])
    // console.log(keys)
  return (
   <>
        {
         show ? 
         <>
         <button onClick={(e) => setType (e.target.value)} value="Box">Box</button>&nbsp;
         <button onClick={(e) => setType (e.target.value)} value="Table">Table</button>&nbsp;
         <button 
            onClick={(e) => { 
            setShow (!show) 
            setType("")
         }}>Back</button>
         </>
         :
         <button onClick={(e) => setShow (!show)}>Select Format Type</button>
        }
        
        {
        type == "Table" 
        &&
         <div className='tContent'>
            {
                <table className='tCon'>
                <thead className='tConHead'>
                    <tr>
                        {keys.map((el) => (
                            <th>{el}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {
                    studentData.map((stud) => (
                    <TableStudent key ={stud.id} {...stud}/>
                    ))
                }
                </tbody>
                </table> 
            }
         </div>
}
{
         type == "Box" 
         &&
          <div className='student'>
            {
            studentData.map((stud) => (
            <SoleStudent key ={stud.id} {...stud}/>
            ))  
            }
         </div>
}
        
  </>
)
}
