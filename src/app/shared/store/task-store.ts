import {createSelector, State, Store} from "@ngrx/store";
import {TaskInterface} from "../interface/task-interface";
import {EntityState} from "@ngrx/entity";

export const getTask = (state: EntityState<any>) => state
console.log(getTask)

export const getTasksListFromLocalStorage = createSelector(
  getTask,
  (state) => state['entities']
)

export const getTaskListEntities = createSelector(
  getTask,
  (state) => Object.values(state['entities']['entities'])
);
