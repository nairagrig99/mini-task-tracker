import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {performers, sortTask, statusValue} from "../select-value/default-value";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SelectModelInterface} from "../interface/select-model.interface";
import {Observable, combineLatest, map} from "rxjs";
import {TaskInterface} from "../interface/task-interface";
import {TaskListApiService} from "../services/task-list-api.service";
import {SortEnum} from "../enums/sort.enum";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent implements OnInit {
  public sortTaskList: SelectModelInterface[] = sortTask;
  public sortEnum = SortEnum;
  public sortForm!: FormGroup;
  public taskList$!: Observable<TaskInterface[]>;
  @Output() sortValue: EventEmitter<TaskInterface[]> = new EventEmitter<TaskInterface[]>()

  constructor(private formBuilder: FormBuilder,
              private taskApiServices: TaskListApiService) {
  }

  ngOnInit(): void {
    this.taskList$ = this.taskApiServices.getTasksList();
    this.initForm();
    this.changeTaskSortDuringFormChanges();
  }

  public get sortTaskListControl(): FormControl {
    return this.sortForm.get('sortTaskList') as FormControl
  }

  private initForm(): void {
    this.sortForm = this.formBuilder.group({
      sortTaskList: [null],
    })
  }

  private changeTaskSortDuringFormChanges(): void {

    combineLatest([this.sortTaskListControl.valueChanges, this.taskList$])
      .pipe(map(([form, task]) => {
        return [...task].sort((a, b) => {
          if (form === this.sortEnum.STATUS) {
            const sortOrder: string[] = statusValue.map((s) => s.value);
            return sortOrder.indexOf(b.status) - sortOrder.indexOf(a.status);
          }
          if (form === this.sortEnum.PERFORMERS) {
            const sortOrder: string[] = performers.map((s) => s.value);
            if (b.performers === null) {
              return -1
            }
            if (a.performers === null) {
              return 1;
            }
            if (sortOrder.indexOf(b.performers[b.performers.length - 1]) - sortOrder.indexOf(a.performers[a.performers.length - 1])) {
              return 0
            }
          }
          if (form === this.sortEnum.DEADLINE) {

            if (b.deadline === null) {
              return -1
            }
            if (a.deadline === null) {
              return 1;
            }

            return new Date(a.deadline[0 as number]).valueOf() - new Date(b.deadline[0 as number]).valueOf()
          }
          return 0
        })
      })).subscribe((sortedTaskList) => this.sortValue.emit(sortedTaskList))
  }

}
