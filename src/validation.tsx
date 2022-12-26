import { Task } from "./types";

const inputValidation = (inputValue: string, tasks: Task[]): boolean => {
  let valid = true;
  if (inputValue === "") {
    alert("Please insert some task");
    valid = false;
  }

  tasks.forEach((task: Task) => {
    if (task.discreption == inputValue) {
      alert("You already added that task.");
      valid = false;
      return;
    }
  });
  return valid;
};

export default inputValidation;
