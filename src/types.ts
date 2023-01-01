export interface ITask {
  id?: number;
  discreption?: string;
}

export interface listOfTasks extends ITask {
  listOfTasks: ITask[];
  onClickDelete: (taskId: number | undefined) => void;
  onClickEdit?: (taskId: number) => void;
}
