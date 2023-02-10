import { useState } from 'react';
import './App.css';

function App() {
// Keep Functions, Variables and Arrays inside App()
  const [input, setInput] = useState("")

  const [toDo, setToDo] = useState([])

  const [strike, setStrike] = useState(false)

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

  const taskDone = () => {
    setStrike(!strike)
  }

  let strikeCheck = strike ? "active" : null;

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
              <div key={index} className="toDoBar">
                <button id="remove" onClick={() => removeToDo(index)}>-</button>
                <p id={strikeCheck} onClick={taskDone}>{task}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
export default App;