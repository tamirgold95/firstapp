import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";

function App() {
  const [userName, setUserName] = useState("Tamir");
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const onInputChange = (value) => {
    setInputValue(value);
  };

  const inputValidation = () => {
    let valid = true;
    if (inputValue === "") {
      alert("Please insert some task");
      valid = false;
    }

    tasks.forEach((task) => {
      if (task.discreption == inputValue) {
        alert("You already added that task.");
        setInputValue("");
        valid = false;
        return;
      }
    });
    return valid;
  };

  const onAddTaskClick = () => {
    if (inputValidation() === false) {
      return;
    }
    const taskId = tasks.length + 1;
    setTasks(
      (tasks) => [...tasks, { id: taskId, discreption: inputValue }]
      // return tasks
    );
    // console.log(tasks);
    setInputValue("");
  };

  const onClickRemove = (taskId) => {
    //console.log(tasks);
    //console.log(checkedTask);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const onClickEdit = (taskId) => {};

  return (
    <div className="App">
      <h1>{userName}'s To Do List</h1>
      <Input onInputChange={onInputChange} value={inputValue} />
      <button onClick={onAddTaskClick}>Add Task</button>
      <ul>
        <TaskList
          listOfTasks={tasks}
          onClickDelete={onClickRemove}
          onClickEdit={onClickEdit}
        />
      </ul>
      <label>{tasks.length} tasks left</label>
    </div>
  );
}

export default App;
