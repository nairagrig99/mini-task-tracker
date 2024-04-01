import {Component, Input} from '@angular/core';
import {TaskInterface} from "../interface/task-interface";
import {Router} from "@angular/router";
import {TaskListApiService} from "../services/task-list-api.service";

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.scss'
})
export class TaskListItemComponent {
  @Input() taskItem!: TaskInterface;
  constructor(private route: Router) {
  }
  public openTask(id: number): void {
    this.route.navigate([`main/item/${id}`])
  }
}
