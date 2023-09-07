import React, { useState } from 'react';
import './tasksbutton.css';
import { CgCalendarDue } from 'react-icons/cg';


export const DueDate = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="addduedate" style={{background:"linear-gradient(90deg, rgb(55, 61, 78) 50%,  rgba(19, 29, 55, 1) 100%)", width:"16%", marginLeft:'20px', borderRadius:'8px'}} >
            <h3 className="header">Due</h3>
            <div className="buttons">
                <button onClick={() => handleDateSelect('Today')}><CgCalendarDue/> Today </button><br/>
                <button onClick={() => handleDateSelect('Tomorrow')}>Tomorrow</button><br/>
                <button onClick={() => handleDateSelect('Next Week')}>Next Week</button><br/>
            </div>
            <div className="footer">
                <button onClick={() => handleDateSelect('Pick a date')}>Pick a date</button>
            </div>
            {selectedDate && <div className="selected-date">{`Selected Date: ${selectedDate}`}</div>}
        </div>
    );
}

