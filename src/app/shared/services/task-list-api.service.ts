import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {getTaskListEntities} from "../store/task-store";
import {Observable} from "rxjs";
import {TaskInterface} from "../interface/task-interface";

@Injectable({
  providedIn: 'root'
})
export class TaskListApiService {
  constructor(private store: Store) {
  }

  public getTasksList(): Observable<TaskInterface[]> {
    // @ts-ignore
    return this.store.select(getTaskListEntities)
  }
}
