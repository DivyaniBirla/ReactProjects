import React from 'react'
import { useState } from 'react';
import "./register.css"
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaUserTie, FaUserLock, FaKey } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { BiSolidError, BiError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
  const inUser = {
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
        const emailExistsIndex = usersData.findIndex(user => user.email == userData.email || user.username == userData.email);

        if (emailExistsIndex !== -1) {
          const existingUser = usersData[emailExistsIndex];
          if (existingUser.password === userData.password) {
            alert("New password matches the previous password. No update needed.");
          }
          else {
            let updatedUsersData = [...usersData];
            updatedUsersData[emailExistsIndex] = {
              ...updatedUsersData[emailExistsIndex], password: userData.password, confirmPassword: userData.confirmPassword,
            };
            localStorage.setItem("usersData", JSON.stringify(updatedUsersData));
            alert(`Password Updated for ${userData.email}`);
          }
        }
        else {
          alert(`User "${userData.email}" not found.`);
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
      <h4><FaKey size="18px" style={{ cursor: "pointer" }} /> Forget Your Password?</h4>
      <form onSubmit={handleSubmit} className="bFor">
        <fieldset id="fMail">
          <legend style={{ cursor: "pointer" }}><FaUserLock size="50px" /></legend>

          <label><FaUserTie size="15px" style={{ cursor: "pointer" }} />Email_Id/Username  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input required className="eml" onChange={handleChange} type="text" placeholder="Email or Username" name="email" />
          </label><br /><br />

          <div className={`tooltip ${visiblity}`}>
            <label><FaUnlockKeyhole size="15px" style={{ cursor: "pointer" }} />New Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input required className="eml" onChange={handleChange} type="Password" placeholder='Password' name="password" minLength="6" />
              <span className={`tooltiptext `}><BiError size="10px" />Password Must be Strong</span>
            </label>
          </div>
          <br />

          <label><IoLockClosed size="17px" style={{ cursor: "pointer" }} />Confirm New Password&nbsp;
            <input required className="eml" onChange={handleChange} type="password" placeholder='Confirm Password' name="confirmPassword" minLength="6" />
          </label><br />

          {!isError
            ? null :
            <>
              <label style={{ marginLeft: "160px", color: "red", cursor: "pointer", fontSize: "15px" }}><BiSolidError size="12px" />Password Incorrect !!</label><br /><br />
            </>}
        </fieldset><br />
        <button type="submit">Reset Password</button><br /><br /><br />

        <hr style={{ color: 'green', height: '1px', width: '50%' }}></hr>
        <br />
      </form>
      <div id="via">
        <div>
          <span style={{ color: "White", cursor: "pointer", textDecoration: "none" }} onClick={() => navigate("/Login")}>Back To Login Page?</span>
        </div>
        <div>
          <button type="button" onClick={() => window.location.href = "/Login"}><FaArrowRightToBracket /> &nbsp; Sign in</button>
        </div>
      </div>
    </div>
  )
}
