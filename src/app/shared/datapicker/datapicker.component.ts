import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }]
})
export class DatepickerComponent implements ControlValueAccessor {

  public startDate!: string;
  public endDate!: string;
  private convertStartAndEndDate: string[] = [];
  onChange = (el?: any) => {
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  public endDateChange(event: any): void {
    this.convertStartAndEndDate.push(this.startDate, this.endDate)
    this.onChange(this.convertStartAndEndDate)
    this.convertStartAndEndDate = [];
  }
}
