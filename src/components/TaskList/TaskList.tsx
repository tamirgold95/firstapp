import { useState } from "react";
import { listOfTasks, Task } from "../../types";

const TaskList = (props: listOfTasks) => {
  //use Effect for the rescue ?? No!
  return (
    <div>
      {props.listOfTasks.map((task: Task) => {
        return (
          <li key={task.id}>
            <label>
              <input type="checkbox"></input>
              {task.discreption}
              <button>Edit</button>
              {/* don't forget to use () => for on event !! */}
              <button onClick={() => props.onClickDelete(task.id)}>
                Delete
              </button>
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default TaskList;
