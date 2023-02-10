import { useState } from 'react';
import './App.css';

function App() {
// Keep Functions, Variables and Arrays inside App()
  const [input, setInput] = useState("")

  const [toDo, setToDo] = useState([])

// =====Overall function adds and updates the array stored in state. First it creates a copy of the values in the state array.
// =====And then adds what is typed in the input box to the copy array.
// =====Update the current state value to the changed copy and setting that as the new state value.
  const addToDo = () => {
    let newToDoList = [...toDo]
    newToDoList.push(input)
    setToDo(newToDoList)
    setInput("")
// =====After submutting input, input state will then be set back to nothing
  }

  const removeToDo = (index) => {
    let newToDoList = [...toDo]
    newToDoList.splice(index, 1)
    setToDo(newToDoList)
  }

// JavaScript/HTML ONLY in return statement for App function or it won't like you
  return (
    <div className="App">

      <div className="mainBox">

        <h1>What do you need to do?</h1>

        <div className="taskBox">
          <input type="text" className="taskInput" value={input} onChange={(e) => setInput(e.target.value)} ></input>
          <button className="addTaskBtn" onClick={() => addToDo()}>+</button>
        </div>
{/* =====Accessing default array and mapping out the data inside */}
        <div className="listBox">
          {toDo.map((task, index) => {
            return (
              <ToDoitem key={index} task={task} index={index} removeToDo={removeToDo}/>
            )
          })}
        </div>
      </div>

    </div>
  );
}

// For each time we run the component we also run the state value that is connected
const ToDoitem = ({task, index, removeToDo}) => {
  const [strike, setStrike] = useState(false)

  let strikeCheck = strike ? "active" : null;

  const taskDone = () => {
    setStrike(!strike)
  }
  return (
    <div  className="toDoBar">
    <button id="remove" onClick={() => removeToDo(index)}>-</button>
    <p id={strikeCheck} onClick={() => taskDone(index)}>{task}</p>
  </div>
  )
}

export default App;