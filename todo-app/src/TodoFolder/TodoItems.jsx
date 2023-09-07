import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { GoCheckCircle, GoCircle, GoCheckCircleFill } from 'react-icons/go';
import { LiaEditSolid } from 'react-icons/lia';
import Tooltip from '../DynamicActions/Tooltip';

export const TodoItems = ({ todoItems, updateImportant, updateStatus, handleEdit, handleDelete, searchtodoItems}) => {
  const [showStarIcon, setShowStarIcon] = useState(todoItems.map((task) => task.important));
  const [showCircleIcon, setShowCircleIcon] = useState(todoItems.map((task) => task.status));

  const handleClick = (index) => {
    const newShowCircleIcon = [...showCircleIcon];
    newShowCircleIcon[index] = !newShowCircleIcon[index];
    setShowCircleIcon(newShowCircleIcon);
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].status = newShowCircleIcon[index];
    updateStatus(updatedTodoItems);
  };

  console.log(searchtodoItems)

  const handleIconClick = (index) => {
    const newShowStarIcon = [...showStarIcon];
    newShowStarIcon[index] = !newShowStarIcon[index];
    setShowStarIcon(newShowStarIcon);
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index].important = newShowStarIcon[index];
    updateImportant(updatedTodoItems);
  };

  return (
    <div>
      {searchtodoItems.map((task, index) => (
        <div className="todoItems" key={task.id}>
          <div style={{ cursor: 'pointer' }}>
            <span className="input-icon" onClick={() => handleClick(index)}
            >
              {task.status === true ? <GoCheckCircleFill /> : showCircleIcon[index] ? <GoCheckCircle /> : <GoCircle />}
            </span>
            <p style={{ cursor: 'pointer' }}>
              <strong style={{ textDecoration: task.status === true ? 'line-through' : null }}>{task.title}</strong>
              <br /></p>
          </div>
          <Tooltip text="Edit Task"><LiaEditSolid onClick={() => handleEdit(task.id)} /></Tooltip>
          <Tooltip text="Delete Task"><AiOutlineDelete onClick={() => handleDelete(task.id)}/></Tooltip>
          <div onClick={() => handleIconClick(index)} className="input-icon">
            {showStarIcon[index] ? (<Tooltip text="Remove Importance"><AiFillStar /></Tooltip>) : (<Tooltip text="Mark task as important"><AiOutlineStar /></Tooltip>)}
          </div>
        </div>
      ))}
    </div>
  );
};
