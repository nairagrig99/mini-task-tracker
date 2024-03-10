import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {Store} from "@ngrx/store";
import {getTaskListEntities} from "../../shared/store/task-store";
import {Observable} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {

  // @ts-ignore
  public taskList: Observable<TaskInterface[]> = this.store.select(getTaskListEntities);

  constructor(public dialog: MatDialog, private store: Store) {
  }

  ngOnInit(): void {
    this.taskList.subscribe((s) => {
      console.log(s)
    })
  }

  public openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result?.data);
      console.log(result);
    });
  }

  public addTask(value: any) {

  }
}
