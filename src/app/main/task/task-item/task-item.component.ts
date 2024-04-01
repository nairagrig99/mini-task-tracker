import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {map} from "rxjs";
import {TaskInterface} from "../../../shared/interface/task-interface";
import {displayedColumns} from "../../../shared/select-value/default-value";
import {PopupComponent} from "../../popup/popup.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskListApiService} from "../../../shared/services/task-list-api.service";
import {RemoveTaskAction} from "../../../shared/store/task-action";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  public taskList!: TaskInterface[];
  public paramId!: number;

  public column: string[] = displayedColumns;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private taskListService: TaskListApiService,
              private store: Store) {
    this.route.params.subscribe(params => this.paramId = params['id']);
  }

  ngOnInit(): void {
    this.getTask();
  }

  private getTask(): void {
    this.taskListService.getTasksList().pipe(map((task: TaskInterface[]) =>
      task.filter((taskItem: TaskInterface) => taskItem.id === +this.paramId))
    ).subscribe((task) => this.taskList = task)
  }

  public editTask(): void {
    this.dialog.open(PopupComponent, {
      width: '700px',
      height: '100%',
      data: {
        editTask: this.taskList[0],
        edit: true,
      }
    });
  }

  public removeTask(){
    this.store.dispatch(new RemoveTaskAction(this.taskList[0].id))
  }

}
