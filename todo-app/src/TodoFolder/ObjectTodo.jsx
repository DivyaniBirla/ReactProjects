import React, { useState } from 'react';
import "./objectTodo.css";
import { SubNavBar } from '../Components/SubNavBar';
import { getCurrentDate } from '../DynamicActions/CurrentDate';
import { Todo } from './Todo';

export const ObjectTodo = ({ handleTaskBar, searchtodoItems, setTodoItems, handleOptionSelect, selectedOption, showOptions,setShowOptions }) => {
    const currentDate = getCurrentDate()

    return (
        <div>
            <SubNavBar handleOptionSelect={handleOptionSelect} />
            <p style={{ width: '23%', fontSize: '12px' }}>{currentDate}</p>
            <Todo handleTaskBar={handleTaskBar}
                searchtodoItems={searchtodoItems}
                setTodoItems={setTodoItems}
                selectedOption={selectedOption}
                showOptions={showOptions} 
                setShowOptions={setShowOptions}/>
        </div>
    );
};
