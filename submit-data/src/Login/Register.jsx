import React from 'react'
import { useState } from 'react';
import "./register.css"
import { BsPersonCircle } from "react-icons/bs";
import { SiAdobeindesign } from "react-icons/si";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { AiFillTwitterCircle ,AiFillGoogleCircle} from "react-icons/ai";
import { BiLogoFacebookCircle}  from "react-icons/bi";

export const Register = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
 const handleSubmit = (e) => {
    e.preventDefault()
    // let user = {
    //     Email,
    //     Password
    // };
    // console.log(Email,Password);
    
    alert(`Your Register Id Password is: ${Email}  ${Password}`)
    setEmail("");
    setPassword("");
 }
  return (
    <div className="reg">
      <h4>LOGIN</h4>
      <form onSubmit = {handleSubmit} className="bFor">
        <fieldset id="fMail">
          <legend ><BsPersonCircle size="35px"/> </legend>
          <label><SiAdobeindesign size="15px"/>Mail Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input required className="eml" onChange ={(ev) => setEmail(ev.target.value)} type = "Email" placeholder='Email@gmail.com' value={Email}/></label><br/><br/>
          <label><FaUnlockKeyhole size="15px"/>Password &nbsp;<input required className="eml" onChange ={(ev) => setPassword(ev.target.value)} type = "Password" placeholder='Password' value={Password}/></label><br/><br/>
          <label><input type="checkbox"/>Remember Me</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<spam><a href="#">Forget Password?</a></spam>
        </fieldset><br/>
        <button type= "submit">Submit</button>
      </form><br/>
      <div id="via">
        <div>
          <span>--------</span> Or <span>--------</span>
            <br/><br/>
          <button type= "button">Create New Account</button>
        </div>
        <div>
          <span>-------</span> Log in Via <span>-------</span>
          <br/><br/>
          <a href="#" style={{color:"white",textDecoration: "none"}}><AiFillTwitterCircle size="20px"/>&nbsp;&nbsp;<BiLogoFacebookCircle size="20px"/>&nbsp;&nbsp;<AiFillGoogleCircle size="20px"/></a> 
        </div>
      </div>
    </div>
  )
}
