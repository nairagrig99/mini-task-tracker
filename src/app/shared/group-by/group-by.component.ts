import {Component, OnInit} from '@angular/core';
import {TaskListApiService} from "../services/task-list-api.service";
import {concatMap, first, Observable, reduce, scan, Subject, Subscription, takeUntil} from "rxjs";
import {TaskInterface} from "../interface/task-interface";

@Component({
    selector: 'app-group-by',
    templateUrl: './group-by.component.html',
    styleUrl: './group-by.component.scss'
})
export class GroupByComponent implements OnInit {
    public taskList$!: Observable<TaskInterface[]>;

    private subscriber$: Subject<void> = new Subject<void>();

    constructor(private service: TaskListApiService) {
    }

    ngOnInit(): void {
        this.taskList$ = this.service.getTasksList()
            .pipe(
                concatMap((val) => val),
                scan((acc: any, curr, index) => {
                    let groupKey = curr.status;
                    if (!acc[groupKey]) {
                        acc[groupKey] = [];
                    }
                    acc[groupKey].push(curr)
                    return acc;
                }, {})
            )
    }


}
