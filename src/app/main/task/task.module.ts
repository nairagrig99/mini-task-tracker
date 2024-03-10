import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TaskComponent} from "./task.component";
import {TaskItemComponent} from "./task-item/task-item.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const route: Routes = [
  {
    path: '',
    component: TaskComponent
  }
]

@NgModule({
  declarations: [TaskComponent, TaskItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NgOptimizedImage,
        SharedModule
    ]
})

export class TaskModule {
}
