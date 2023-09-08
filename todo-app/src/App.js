import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { ObjectTodo } from './TodoFolder/ObjectTodo';
import { DueDate } from './TaskBarButtons/DueDate';

function App() {

  const [showTaskBar, setshowTaskBar] = useState(false);
  const lsTodoitems = JSON.parse(localStorage.getItem("todoItems"))
  const [searchtodoItems, setTodoItems] = useState(lsTodoitems || [])
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSearch = (e) => {
    const filterdData = lsTodoitems.filter((el) => {
      return el.title.includes(e.target.value)
    })

    setTodoItems(filterdData)
  }


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if(option.value == 'importance'){
      let SortImp = lsTodoitems.filter((el) => el.important == true) 
      setTodoItems(SortImp)
    }
   
  };

  const handleTaskBar = {
    setshowTaskBar,
    showTaskBar

  }

  return (
    <div className="App">
      <Navbar handleTaskBar={handleTaskBar} handleSearch={handleSearch} />
      <ObjectTodo handleTaskBar={handleTaskBar}
        searchtodoItems={searchtodoItems}
        setTodoItems={setTodoItems}
        handleOptionSelect={handleOptionSelect}
        selectedOption={selectedOption}
        showOptions={showOptions}
        setShowOptions={setShowOptions}/>
      {/* <DueDate/> */}
    </div>
  );
}

export default App;
