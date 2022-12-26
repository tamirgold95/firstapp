export interface Task {
  id?: number;
  discreption?: string;
}

export interface listOfTasks extends Task {
  listOfTasks: Task[];
  onClickDelete: (taskId: number | undefined) => void;
  onClickEdit?: (taskId: number) => void;
}
