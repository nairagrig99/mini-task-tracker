import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {Store} from "@ngrx/store";
import {getTaskListEntities} from "../../shared/store/task-store";
import {Observable} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";
import {Router} from "@angular/router";
import {TaskListApiService} from "../../shared/services/task-list-api.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {

  public taskList$!: Observable<TaskInterface[]>;

  constructor(public dialog: MatDialog,
              private route: Router,
              private taskApiServices: TaskListApiService) {
  }

  ngOnInit(): void {
    this.taskList$ = this.taskApiServices.getTasksList()
  }

  public openDialog(): void {
    this.dialog.open(PopupComponent, {
      width: '700px',
      height: '100%'
    });
  }

  public openTask(id: number): void {
    this.route.navigate([`main/item/${id}`])
  }
}
