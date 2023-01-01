import { ITask } from "./types";

const inputValidation = (inputValue: string, tasks: ITask[]): boolean => {
  if (inputValue === "") {
    alert("Please insert some task");
    return false;
  }

  tasks.forEach((task: ITask) => {
    if (task.discreption === inputValue) {
      alert("You already added that task.");
      return false;
    }
  });
  return true;
};

export default inputValidation;
