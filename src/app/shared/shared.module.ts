import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupComponent} from "./popup/popup.component";
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {DatapickerComponent} from "./datapicker/datapicker.component";

@NgModule({
  declarations: [PopupComponent, InputComponent, SelectComponent,DatapickerComponent],
  imports: [
    CommonModule,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    FormsModule,
    MatIcon,
    MatHint,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {
}
