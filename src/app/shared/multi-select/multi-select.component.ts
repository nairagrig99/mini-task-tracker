import {Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl, FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl
} from "@angular/forms";
import {SelectModelInterface} from "../interface/select-model.interface";

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MultiSelectComponent),
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = '';
  @Input() optionValue!: SelectModelInterface[];

  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>();

  private formControl!: FormControl;

  public model!: string;

  constructor(private inj: Injector) {

  }

  ngOnInit(): void {
    const ngControl = this.inj.get(NgControl);

    if (ngControl instanceof FormControlName) {
      this.formControl = this.inj.get(FormGroupDirective).getControl(ngControl);
    } else {
      this.formControl = (ngControl as FormControlDirective).form as FormControl;
    }
  }

  onChange = (el?: any) => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    // if (value) {
    //   this.optionValue = value;
    // }
  }

  get value(): string {
    return this.model;
  }

  set value(values: string) {
    this.model = values;
    this.onChange(this.model)
  }


}
