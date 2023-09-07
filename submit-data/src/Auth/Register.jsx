import React from 'react'
import { useState } from 'react';
import "./register.css"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { SiAdobeindesign } from "react-icons/si";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { BiSolidError, BiError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const inUser = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [userData, setUserData] = useState(inUser);
  const [isError, setError] = useState(false);
  const [visiblity, setVisiblity] = useState("");
  const navigate = useNavigate()
  const usersData = JSON.parse(localStorage.getItem("usersData")) || []
  const CheckStrongPassword = (pass) => {
    const strongPasswordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})')
    return strongPasswordRegex.test(pass)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.password === userData.confirmPassword) {
      let isCheck = CheckStrongPassword(userData.password)
      if (isCheck) {
        const emailExists = usersData.some(user => user.email == userData.email || user.username == userData.username);
        if(emailExists)
        {
          alert(`User Already Exists ${userData.username}`)
        }else{
          usersData.push(userData)
          localStorage.setItem("usersData", JSON.stringify(usersData))
          setError(false);
          window.location.pathname="/Login";
        }
        e.target.reset()
        setUserData(inUser); 
      }
    } else {
      setError(true);
    }
  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError(false);

    if (e.target.name === "password") {
      let isCheck = CheckStrongPassword(e.target.value)
      setVisiblity("visible")
      if (isCheck) {
        setVisiblity("")
      }
      if (e.target.value === "") {
        setVisiblity("")
      }
    }
  };
  return (
    <div className="reg">
      <h4>Create New Account</h4>
      <form onSubmit={handleSubmit} className="bFor">
        <fieldset id="fMail">
          <legend style={{ cursor: "pointer" }}><RiAccountPinCircleFill size="42px" /></legend>

          <label><FaUserTie size="17px" style={{ cursor: "pointer" }} />Username &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required className="eml" onChange={handleChange} type="Username" placeholder='Username must be Unique' name="username" />
          </label><br /><br />

          <label><SiAdobeindesign size="15px" style={{ cursor: "pointer" }} />Email ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required className="eml" onChange={handleChange} type="Email" placeholder='Email@gmail.com' name="email" />
          </label><br /><br />

          <div className={`tooltip ${visiblity}`}>
            <label><FaUnlockKeyhole size="15px" style={{ cursor: "pointer" }} />Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input required className="eml" onChange={handleChange} type="Password" placeholder='Password' name="password" minLength="6" />
              <span className={`tooltiptext `}><BiError size="10px" />Password Must be Strong</span>
            </label>
          </div>
          <br />

          <label><IoLockClosed size="17px" style={{ cursor: "pointer" }} />Confirm Password&nbsp;
            <input required className="eml" onChange={handleChange} type="password" placeholder='Confirm Password' name="confirmPassword" minLength="6" />
          </label><br />

          {!isError
            ? null :
            <>
              <label style={{ marginLeft: "130px", color: "red", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}><BiSolidError size="10px" />Password Incorrect !!</label><br /><br />
            </>}
        </fieldset><br /><br />
        <button type="submit">Sign Up</button><br /><br />
        <p style={{color: "White", cursor: "pointer"}} onClick={()=>navigate("/Login")}>Already a user?</p>
        
      </form>
    </div>
  )
}
