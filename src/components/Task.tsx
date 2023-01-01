import { useState } from "react";
import { ITask } from "../types";

const Task = (
  task: any,
  onChange: (taskId: number) => void,
  onDelete: (taskId: number | undefined) => void
) => {
  const [editing, setEditing] = useState(false);
  let formOption;

  if (editing) {
    formOption = (
      <>
        <input
          onChange={(e) => {
            onChange({
              ...task,
              discreption: e.target.value,
            });
          }}
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    formOption = (
      <>
        {task.discreption}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input type="checkbox" />
      {formOption}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};

export default Task;
