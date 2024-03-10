import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {SharedModule} from "../shared/shared.module";
import {PopupComponent} from "./popup/popup.component";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button'
import {MatIcon} from "@angular/material/icon";
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
  declarations: [MainComponent, PopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(route),
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogModule,
    MatButtonModule,
    MatIcon
  ],
  exports: [
    PopupComponent
  ],
  providers: []
})
export class MainModule {
}
