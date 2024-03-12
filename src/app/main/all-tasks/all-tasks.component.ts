import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TaskListApiService} from "../../shared/services/task-list-api.service";
import {Observable, of} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent implements OnInit {
  public taskList$!: Observable<TaskInterface[]>;

  constructor(private route: Router,
              private taskApiServices: TaskListApiService) {
  }

  ngOnInit(): void {
    this.taskList$ = this.taskApiServices.getTasksList()
  }

  public openTask(id: number): void {
    this.route.navigate([`main/item/${id}`])
  }

  public filterTaskList(filterValue: any): void {
    this.taskList$ = of(filterValue);
  }

}
