import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../shared/popup/popup.component";
import {Store} from "@ngrx/store";
import {AddTaskAction} from "../../shared/store/task-action";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  constructor(public dialog: MatDialog, private store: Store) {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private index = 0;

  openDialog() {
    const task = {
      id: this.index,
      title: 'first task',
      name: 'task name',
      deadline: 'till morning',
      priority: 'higher',
      performers: ['ani', 'mane']
    }
    this.store.dispatch(new AddTaskAction({
      ...task
    }))
    this.index++;

    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
