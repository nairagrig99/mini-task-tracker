import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SelectModelInterface} from "../interface/select-model.interface";
import {performers, statusValue} from "../select-value/default-value";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TaskInterface} from "../interface/task-interface";
import {combineLatest, map, Observable, takeUntil} from "rxjs";
import {Unsubscriber} from "../../core/unsubscrib/unsubscriber";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',

})
export class FilterComponent extends Unsubscriber implements OnInit, OnDestroy {

  @Input() taskList$!: Observable<TaskInterface[]>
  @Output() changeFilter: EventEmitter<TaskInterface[]> = new EventEmitter<TaskInterface[]>()

  public status: SelectModelInterface[] = statusValue;
  public performers: SelectModelInterface[] = performers;
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.filterDuringFormChanges();

  }

  public get performersControl(): FormControl {
    return this.form.get('performers') as FormControl;
  }

  public get statusControl(): FormControl {
    return this.form.get('status') as FormControl;
  }

  public get deadlineControl(): FormControl {
    return this.form.get('deadline') as FormControl;
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      status: [null],
      performers: [null],
      deadline: [null],
    })
  }

  public filterDuringFormChanges(): void {
    combineLatest([this.form.valueChanges, this.taskList$])
      .pipe(
        map(([form, taskList]) => {
          return taskList.filter((task) =>
            // @ts-ignore
            !this.isNull(task.deadline) && !this.isNull(task.performers) && !this.isNull(task.status))
            .filter((taskItem) => {
              const statusAndPerformers = form.status === taskItem.status && taskItem.performers?.some((performers) => performers === form.performers)

              if (!this.isNull(form.status) && this.isNull(form.performers)) {
                return form.status === taskItem.status
              }
              if (!this.isNull(form.status) && form.performers && this.isNull(form.deadline)) {
                return statusAndPerformers
              }

              if (!this.isNull(form.status) && form.performers && !this.isNull(form.deadline)) {
                return statusAndPerformers && this.isEqualDate(form?.deadline, taskItem?.deadline)
              }
              if (form.performers && this.isNull(form.status) && this.isNull(form?.deadline)) {
                return taskItem.performers?.some((performers) => performers === form.performers)
              }
              if (!this.isNull(form.deadline[0]) && !this.isNull(taskItem?.deadline)) {
                return this.isEqualDate(form?.deadline, taskItem?.deadline);
              }

              return []
            })
        }),
        takeUntil(this.ngUnsubscribe)
      ).subscribe((filterTaskList) => this.changeFilter.emit(filterTaskList))
  }

  private isEqualDate(form: any, taskItem: any): boolean {
    return new Date(form[0]).getTime() === new Date(taskItem[0]).getTime() && new Date(form[1]).getTime() === new Date(taskItem[1]).getTime()
  }

  private isNull(value: string | []): boolean {
    return value === null;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
