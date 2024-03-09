import {Action} from "@ngrx/store";
import {TaskInterface} from "../interface/task-interface";

export enum AddTask {
  GetAllTask = '[Get Task] GetAllTask',
  AddTask = '[Add Task] AddTasks',
  UpdateTask = '[Update Task] UpdateTasks',
  RemoveTask = '[Remove Task] RemoveTasks',
}

export class GetAllTaskAction implements Action {
  readonly type = AddTask.GetAllTask;
}

export class AddTaskAction implements Action {
  readonly type = AddTask.AddTask;

  constructor(public payload: TaskInterface) {
    console.log('payload in action', payload)
  }
}

export class UpdateTaskAction implements Action {
  readonly type = AddTask.UpdateTask;

  constructor(public payload: number) {
  }
}

export class RemoveTaskAction implements Action {
  readonly type = AddTask.RemoveTask;

  constructor(public payload: string) {
  }
}

export type TaskAction = AddTaskAction
  | GetAllTaskAction
  | UpdateTaskAction
  | RemoveTaskAction
