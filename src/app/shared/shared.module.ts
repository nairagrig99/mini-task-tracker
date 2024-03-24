import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatHint} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOption, MatSelect, MatSelectTrigger} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {DatepickerComponent} from "./datapicker/datapicker.component";
import {MultiSelectComponent} from "./multi-select/multi-select.component";
import {ColorDirective} from "./directives/color.directive";
import {DatePipe} from "./pipe/date.pipe";
import {FilterComponent} from "./filter/filter.component";
import {SortComponent} from "./sort/sort.component";
import {GroupByComponent} from "./group-by/group-by.component";

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    DatepickerComponent,
    MultiSelectComponent,
    ColorDirective,
    DatePipe,
    FilterComponent,
    SortComponent,
    GroupByComponent
  ],
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
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectTrigger
  ],
  exports: [
    MultiSelectComponent,
    InputComponent,
    DatepickerComponent,
    SelectComponent,
    ColorDirective,
    DatePipe,
    FilterComponent,
    SortComponent,
    GroupByComponent
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {
}
