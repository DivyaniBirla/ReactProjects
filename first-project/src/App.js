import React, { useState } from "react";
import "./styles.css";
import "./App.css";
import { Counter } from "./Divyani/Counter";
import { Cards } from "./CardsFolder/Cards";
import { Student } from "./StudentFolder/Student";

export default function App() {
  const [showRButton, setshowRButton] = useState(false)
  const [Select, setSelect] = useState("")
 
  return (
    <>
    {
     showRButton ? 
     <>
     <button className="hButton"
              onClick={(e) => { 
                setshowRButton (!showRButton);
                setSelect("")
          }}>Home</button>

          <button className="bButton"
              onClick={(e) => { 
                setSelect(!"");
                
          }}>Back</button>
          <br/>
          <span id="comp"><ins>Select The Component</ins></span> 
           <br/>
      <div className="rButton">
            <label for="Counter">
              <input type="radio" id="Counter" name="Choose_Comp" onClick={(e) => setSelect (e.target.value)} value="Counter"/>
                Counter
            </label>  
            <label for="Cards">
              <input type="radio" id="Cards" name="Choose_Comp" onClick={(e) => setSelect (e.target.value)} value="Cards"/>
                Cards
            </label>
            <label for="Student">
              <input type="radio" id="Student" name="Choose_Comp" onClick={(e) => setSelect (e.target.value)} value="Student"/>
                Student
            </label>
      </div>
          <br/><br/>

     </>
     :
     <button onClick={(e) => setshowRButton (!showRButton)} className="sComp">Click To Select Component</button>
    }
    <div className="App">
      {
        Select == "Counter"
        &&
        <Counter />
      }
      {
        Select == "Cards"
        &&
        <Cards/>
      }
      {
        Select == "Student"
        &&
        <Student/>
      }
    </div>

    </>
  );
    
}
