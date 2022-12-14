import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Div from "./components/Div";

function App() {
  const [userName, setUserName] = useState("Tamir");
  const [inputValue, setInputValue] = useState("");
  const [counter, Setcounter] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [checkedTask, setCheckesTask] = useState([]);

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const onAddTaskClick = () => {
    if (inputValue === "") {
      alert("Please insert some task");
      return;
    }
    for (let task of tasks) {
      if (task == inputValue) {
        alert("You already added that task.");
        setInputValue("");
        return;
      }
    }
    setTasks(
      (tasks) => [...tasks, [inputValue]]
      // return tasks
    );
    console.log(tasks);
    setInputValue("");
    Setcounter(counter + 1);
  };

  const onClickRemove = () => {
    //console.log(tasks);
    //console.log(checkedTask);
    setTasks(
      tasks.filter(function (task) {
        return !checkedTask.some(function (checkedTask) {
          return task[0] === checkedTask;
        });
      })
    );
    Setcounter(counter - checkedTask.length);
    setCheckesTask([]);
  };

  return (
    <div className="App">
      <h1>{userName}'s To Do List</h1>
      <Input onInputChange={onInputChange} value={inputValue} />
      <button onClick={onAddTaskClick}>Add Task</button>
      <Div
        tasks={tasks}
        checkedTask={checkedTask}
        setCheckesTask={setCheckesTask}
        counter={counter}
      />
      <button onClick={onClickRemove}>Clear Selected Tasks</button>
    </div>
  );
}

export default App;
