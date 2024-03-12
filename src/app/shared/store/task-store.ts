import {createSelector} from "@ngrx/store";
import {EntityState} from "@ngrx/entity";

export const getTask = (state: EntityState<any>) => state
export const getTaskListEntities = createSelector(
  getTask,
  (state: EntityState<any>) => Object.values(state['entities']['entities'])
);
