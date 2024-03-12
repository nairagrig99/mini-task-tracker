import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {SharedModule} from "../shared/shared.module";
import {PopupComponent} from "./popup/popup.component";
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogModule
} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button'
import {MatIcon} from "@angular/material/icon";
import {TaskItemComponent} from "./task/task-item/task-item.component";
import {AllTasksComponent} from "./all-tasks/all-tasks.component";

const route: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'create-task',
        pathMatch: "full"
      },
      {
        path: "create-task",
        loadChildren: () => import('../main/task/task.module').then((m) => m.TaskModule)
      },
      {
        path: 'item/:id',
        component: TaskItemComponent
      }, {
        path: 'all-task',
        component: AllTasksComponent
      }
    ]
  }
]

@NgModule({
  declarations: [MainComponent, PopupComponent, AllTasksComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route),
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogModule,
    MatButtonModule,
    MatIcon,
    NgOptimizedImage
  ],
  exports: [
    PopupComponent
  ],
  providers: []
})
export class MainModule {
}
