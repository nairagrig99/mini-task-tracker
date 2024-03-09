import {createSelector, State} from "@ngrx/store";
import {TaskInterface} from "../interface/task-interface";

export const getTask = (state: TaskInterface) => state

export const getTasksList = createSelector(
  getTask,
  (state: TaskInterface) => state
);
