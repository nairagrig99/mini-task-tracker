import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectModelInterface} from "../interface/select-model.interface";
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() optionValue!: SelectModelInterface[];
  public selectValue!: SelectModelInterface[];

  set selectedValue(value: any) {
    this.selectValue = value;
    this.onChange(this.selectValue)
  }

  get selectedValue() {
    return this.selectValue;
  }

  onChange = (el?: any) => {
  };

  writeValue(value: any): void {
    if (value) {
      this.selectValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }


}
