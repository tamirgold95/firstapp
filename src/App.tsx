import "./App.css";
import { useState } from "react";
import Input from "./components/Input/Input";
import TaskList from "./components/TaskList/TaskList";
import { Task } from "./types";
import inputValidation from "./validation";

function App() {
  const [userName, setUserName] = useState("Tamir");
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  const onAddTaskClick = () => {
    if (inputValidation(inputValue, tasks) === false) {
      setInputValue("");
      return;
    }
    const taskId = tasks.length + 1;
    setTasks((tasks) => [...tasks, { id: taskId, discreption: inputValue }]);
    // console.log(tasks);
    setInputValue("");
  };

  const onClickRemove = (taskId: number | undefined) => {
    //console.log(tasks);
    //console.log(checkedTask);
    setTasks(tasks.filter((t: Task) => t.id !== taskId));
  };

  //const onClickEdit = (taskId : number) => {};

  return (
    <div className="App">
      <h1>{userName}'s To Do List</h1>
      <Input onInputChange={onInputChange} value={inputValue} />
      <button onClick={onAddTaskClick}>Add Task</button>
      <ul>
        <TaskList
          listOfTasks={tasks}
          onClickDelete={onClickRemove}
          // onClickEdit={onClickEdit}
        />
      </ul>
      <label>{tasks.length} tasks left</label>
    </div>
  );
}

export default App;
