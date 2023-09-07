import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { PiStarLight } from 'react-icons/pi';
import { BsCalendar3Week } from 'react-icons/bs';
import { LuCalendarPlus } from 'react-icons/lu';
import Tooltip from '../DynamicActions/Tooltip';

const options = [
    { value: 'importance', label: <div className='allOpt'><div><PiStarLight /></div><div>Importance</div></div> },
    { value: 'due_date', label: <div className='allOpt'><div><BsCalendar3Week /></div><div>Due Date</div></div> },
    { value: 'alphabetically', label: <div className='allOpt'><div><BiSortAlt2 /></div><div>Alphabetically</div></div> },
    { value: 'creation_date', label: <div className='allOpt'><div><LuCalendarPlus /></div><div>Creation Date</div></div> },
];

export const SubNavBar = ({ handleOptionSelect, selectedOption, showOptions,setShowOptions }) => {
    


    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };


    const handleBlur = () => {
        setTimeout(() => {
            setShowOptions(false);
        }, 200);
    };

    return (
        <div className='sub-nav' >
            <h4 style={{ fontSize: "30px", display: 'flex', alignItems: 'center', gap: "10px" }}><FaBars /> All Task</h4>
            <div className='navright' onBlur={handleBlur}>
                <button onClick={handleButtonClick} style={{ display: 'flex' }}>
                    <Tooltip text="Sort"> <BiSortAlt2 />Sort</Tooltip>
                </button>
                {showOptions && (
                    <div className="options-list">
                        <p className="sort-header">Sort By</p>
                        <ul>
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleOptionSelect(option)}
                                    className={selectedOption === option ? 'selected' : ''}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
