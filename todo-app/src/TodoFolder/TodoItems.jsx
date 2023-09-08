import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { GoCheckCircle, GoCircle, GoCheckCircleFill } from 'react-icons/go';
import { LiaEditSolid } from 'react-icons/lia';
import Tooltip from '../DynamicActions/Tooltip';

export const TodoItems = ({ todoItems, updateImportant, updateStatus, handleEdit, handleDelete, searchtodoItems }) => {
   
  const [ishovered, setIsHovered] = useState(false)
  const [className, setClassName] = useState(false)

  const handleClick = (id) => {
    const newArray = searchtodoItems.map((el, i) => {
      if (el.id === id) {
        el.status = !el.status
      }
      return el
    })
    updateStatus(newArray)
  };

  const handleIconClick = (id) => {
    const lsTodoitems = JSON.parse(localStorage.getItem("todoItems"))
    // console.log(searchtodoItems)
    const newArray = lsTodoitems.map((el) => {
      if (el.id === id) {
        el.important = !el.important
      }
      return el
    })
    // console.log(newArray)
    updateImportant(newArray);
  };


  return (
    <div>
      {searchtodoItems.map((task) => (
        <div className="todoItems" key={task.id}>
          <div style={{ cursor: 'pointer' }}>
            <span className="input-icon" onClick={() => handleClick(task.id)}>
              {task.status === true ? <GoCheckCircleFill /> : <GoCircle />}
            </span>
            <p style={{ cursor: 'pointer' }}>
              {task.status == true ?
                <strong style={{ textDecoration: 'line-through' }}>{task.title}<br />Completed</strong>
                :
                <strong >{task.title}</strong>}<br />
            </p>
          </div>
          <Tooltip text="Edit Task"><LiaEditSolid onClick={() => handleEdit(task.id)} /></Tooltip>
          <Tooltip text="Delete Task"><AiOutlineDelete onClick={() => handleDelete(task.id)} /></Tooltip>
          <div onClick={() => handleIconClick(task.id)} className="input-icon">
            {task.important ? (<Tooltip text="Remove Importance"><AiFillStar /></Tooltip>) : (<Tooltip text="Mark task as important"><AiOutlineStar /></Tooltip>)}
          </div>
        </div>
      ))}
    </div>
  );
};
