import React, { useState } from 'react';
import './Navbar.css';
import { FaLockOpen } from "react-icons/fa6";
import { HiUserPlus } from "react-icons/hi2";
import { VscSearch } from 'react-icons/vsc';
import Tooltip from '../DynamicActions/Tooltip';

export const Navbar = ({ handleTaskBar, handleSearch }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='allnav'>
            <a href="http://localhost:3000/" className='tagName'><h4 style={{ cursor: "pointer" }}>To Do</h4></a>

            <span className="search-icon">
                <Tooltip text="Search">
                    <VscSearch style={{ padding: "5px", color: "#78bafd" }} /></Tooltip>
                <input
                    type='search'
                    onClick={() => {
                        setShow(true)
                        handleTaskBar.setshowTaskBar(false)
                    }}
                    onChange={handleSearch}
                    onBlur={() => setShow(false)}
                    placeholder={show ? "search..." : ' '}
                    style={{ cursor: "pointer" }}
                />
            </span>

            <div className='navright'>
                <p><Tooltip text="Login"><FaLockOpen size={25} style={{ cursor: "pointer" }} /></Tooltip></p>
                <p><Tooltip text="Sign Up"> <HiUserPlus size={25} style={{ cursor: "pointer" }} /></Tooltip></p>
            </div>
        </div>
    )
}
