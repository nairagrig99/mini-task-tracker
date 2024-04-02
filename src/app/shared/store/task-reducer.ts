import {AddTask, TaskAction} from "./task-action";
import {TaskInterface} from "../interface/task-interface";
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const adapter = createEntityAdapter<TaskInterface>({
  selectId: (e) => e.id
});

export const initialState = adapter.getInitialState({
  entities: {},
  ids: []
});


export function taskReducer
(state: EntityState<TaskInterface> = initialState,
 action: TaskAction) {

  switch (action.type) {

    case AddTask.AddTask:
      return adapter.addOne(action.payload, state)

    case AddTask.UpdateTask:
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, {...state});

    case AddTask.RemoveTask: {
      return adapter.removeOne(action.payload, state);
    }

    default:
      return state

  }

}
