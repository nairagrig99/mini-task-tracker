import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskComponent} from "./task.component";
import {TaskItemComponent} from "./task-item/task-item.component";
import {RouterModule, Routes} from "@angular/router";

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
    RouterModule.forChild(route)
  ]
})

export class TaskModule {
}
