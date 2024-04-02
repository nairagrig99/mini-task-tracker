import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {concatMap, first, Observable, reduce, combineLatest, tap, take, scan, takeUntil, map, filter} from "rxjs";
import {TaskInterface} from "../interface/task-interface";
import {groupBy} from "../select-value/default-value";
import {SelectModelInterface} from "../interface/select-model.interface";
import {GroupTaskInterface} from "../interface/group-task.interface";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Unsubscriber} from "../../core/unsubscrib/unsubscriber";

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.scss'
})
export class GroupByComponent extends Unsubscriber implements OnInit, OnDestroy {
  @Input() taskList$!: Observable<TaskInterface[]>;
  @Output() groupByTaskList: EventEmitter<GroupTaskInterface[]> =
    new EventEmitter<GroupTaskInterface[]>();


  public groupBy: SelectModelInterface[] = groupBy;
  private form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super()
  }

  public get groupTaskListControl(): FormControl {
    return this.form.get('groupTaskList') as FormControl;
  }


  ngOnInit(): void {
    this.initForm();
    this.groupTaskList();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      groupTaskList: [null]
    })
  }

  private groupTaskList(): void {
    this.groupTaskListControl.valueChanges.pipe(filter((form) => {
      if (!form) {
        this.groupByTaskList.emit([])
      }
      return !!form
    })).subscribe(() => {
      this.taskList$.pipe(
        first(),
        concatMap((taskLists: TaskInterface[]) => taskLists),
        reduce((acc: GroupTaskInterface, curr: TaskInterface) => {
          let groupKey = this.getProperty(curr, this.groupTaskListControl.value);
          if (!acc[groupKey]) {
            acc[groupKey] = [];
          }
          acc[groupKey].push(curr);
          return acc;
        }, {}),
        map((acc: GroupTaskInterface) => {
            const keys = Object.keys(acc);
            const sorted = keys.sort((a: string, b: string) => {
              return acc[b].length - acc[a].length
            });
            const sortedObj: GroupTaskInterface = {};
            sorted.forEach((key: string): void => {
              sortedObj[key] = acc[key];
            })
            return sortedObj;
          }
        ),
        takeUntil(this.ngUnsubscribe),
      ).subscribe((groupedBy: GroupTaskInterface) => this.groupByTaskList.emit([groupedBy]))
    })
  }

  private getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
