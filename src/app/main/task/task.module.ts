import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TaskComponent} from "./task.component";
import {TaskItemComponent} from "./task-item/task-item.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {MatIcon} from "@angular/material/icon";
import {
  MatCellDef,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableModule
} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

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
    SharedModule,
    MatIcon,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatTable,
    MatSort,
    MatTableModule
  ]
})

export class TaskModule {
}
