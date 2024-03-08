import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";

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
      }
    ]
  }
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class MainModule {
}
