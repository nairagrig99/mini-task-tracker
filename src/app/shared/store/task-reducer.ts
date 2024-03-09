import {AddTask, TaskAction} from "./task-action";
import {TaskInterface} from "../interface/task-interface";
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {on} from "@ngrx/store";

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
  console.log('action.type', action.type)
  switch (action.type) {

    // case AddTask.GetAllTask: {
    //   return {
    //     ...state
    //   }
    // }

    case AddTask.AddTask:
      console.log('actionpayloaddddddddd', action.payload)
      return adapter.addOne(action.payload, state)

    // case AddTask.UpdateTask: {
    //   return {
    //     ...state,
    //     task: action.payload
    //   }
    // }
    // case AddTask.RemoveTask: {
    //   return {
    //     ...state,
    //     task: action.payload
    //   }
    // }

    default:
      return state

  }

}
