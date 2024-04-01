import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskListApiService} from "../../shared/services/task-list-api.service";
import {Observable, of} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";
import {GroupTaskInterface} from "../../shared/interface/group-task.interface";
import {Unsubscriber} from "../../core/unsubscrib/unsubscriber";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AllTasksComponent extends Unsubscriber implements OnInit {
  public taskList$!: Observable<TaskInterface[]>;
  public groupByTaskList$!: Observable<GroupTaskInterface[]>;

  constructor(private taskApiServices: TaskListApiService) {
    super()
  }

  ngOnInit(): void {
    this.taskList$ = this.taskApiServices.getTasksList()
  }

  public filterTaskList(filterValue: any): void {
    this.taskList$ = of([filterValue]);
  }

  public groupTaskList(groupTaskList: GroupTaskInterface[]): void {
    this.groupByTaskList$ = of(groupTaskList)
  }

  protected readonly Object = Object;
}
