import React from 'react'
import { useState } from 'react'
import Tooltip from '../DynamicActions/Tooltip';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCircle } from 'react-icons/bi';
import { BsRepeat } from 'react-icons/bs';
import { PiBell } from 'react-icons/pi';
import { IoCalendarOutline } from 'react-icons/io5';
import { TodoItems } from './TodoItems';
import { useEffect } from 'react';
// import { DueDate } from '../TaskBarButtons/DueDate';

export const Todo = ({ handleTaskBar, searchtodoItems, setTodoItems }) => {

  const init = {
    id: Date.now(),
    title: '',
    status: false,
    important: false,
    // creationDate : 
  };

  const [EditItem, setEditItem] = useState(false)
  const { showTaskBar, setshowTaskBar } = handleTaskBar
  const [task, setTask] = useState(init);
  const isButtonEnabled = task.title !== '';

  const handleClick = () => {
    setshowTaskBar(true)
  }

  const updateLocalStorage = (updatedTodoItems) => {
    localStorage.setItem('todoItems', JSON.stringify(updatedTodoItems));
    setTodoItems(updatedTodoItems)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleExist = searchtodoItems.find((el) => el.title == task.title)
    if (titleExist) {
      setTask(init)
      setEditItem(false)
      alert(`Item already exists`)
    }
    else {
      if (EditItem) {
        if (task.title == "") {
          setEditItem(false)
          return
        }
        // console.log(task)
        const newArray = searchtodoItems.map((el, i) => {
          if (el.id === task.id) {
            el.title = task.title
          }
          return el
        })
        updateLocalStorage(newArray);
        setTask(init)
        setEditItem(false)
      }
      else {
        const newArray = [...searchtodoItems, task]
        updateLocalStorage(newArray);
        setTask(init)
      }
    }
  }

  const handleEdit = (id) => {
    const item = searchtodoItems.find((el) => el.id === id)
    setTask({ ...task, id: id, title: item.title })
    setEditItem(true)
  }

  const handleDelete = (id) => {
    const afterDeleteTodos = searchtodoItems.filter((todo) => todo.id !== id)
    updateLocalStorage(afterDeleteTodos);
    setTask(init)
  }

  return (
    <div>
       
      <div className="allTodo">
        <div className="inTodo" onClick={handleClick} >
          <span className="input-icon">{
            showTaskBar ? <BiCircle /> :
              <AiOutlinePlus />
          }
          </span>
          <input required type="text" placeholder='Add a Task' value={task.title}
            onChange={(e) => {
              if (task.title.length == 1) {
                setEditItem(false)
              }
              setTask({ ...task, ["title"]: e.target.value })
            }
            } />
        </div>
      </div>
      {showTaskBar &&
        <div className='taskbar'>
          <div className='taskIcon'>
            <button className='tIcons'><Tooltip text="Add due date"><IoCalendarOutline size='16px' /></Tooltip></button>
            <button className='tIcons'><Tooltip text="Remind me"><PiBell size='16px' /></Tooltip></button>
            <button className='tIcons'><Tooltip text="Repeat"><BsRepeat size='16px' /></Tooltip></button>
          </div>
          <div>
            <button className='addBtn' onClick={handleSubmit}
              id={isButtonEnabled ? 'enabled' : 'disabled'}
              disabled={!isButtonEnabled}>{EditItem ? "Edit" : "Add"}</button>
          </div>
        </div>
      }

      {
        searchtodoItems.length != 0 ?
          <TodoItems
            todoItems={searchtodoItems}
            searchtodoItems={searchtodoItems}
            updateImportant={updateLocalStorage}
            updateStatus={updateLocalStorage}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setTodoItems ={setTodoItems} />
          :
          <div className="todoItems">No task added yet!</div>
      }

      {/* <DueDate/> */}
    </div>
  );
};
