import { useState } from "react";
import { listOfTasks, ITask } from "../../types";
import Task from "../Task";

const TaskList = (props: any) => {
  //use Effect for the rescue ?? No!

  return (
    <ul>
      <div>
        {props.listOfTasks.map((task: ITask) => {
          return (
            <li key={task.id}>
              {/* <Task
                task={task}
                onChange={props.onClickEdit}
                onDelete={props.onClickDelete}
              ></Task> */}
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
    </ul>
  );
};

export default TaskList;
