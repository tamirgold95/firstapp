import { useState } from "react";

const TaskList = (props) => {
  //use Effect for the rescue ?? No!
  return (
    <div>
      {props.listOfTasks.map((task) => {
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
