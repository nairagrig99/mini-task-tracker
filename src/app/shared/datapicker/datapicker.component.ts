import {Component, forwardRef, Input} from '@angular/core';
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
  @Input() placeholder: string = '';
  @Input() label: string = '';


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

  writeValue(dates: string[]): void {
    if (dates?.length > 0) {
      this.startDate = dates[0]
      this.endDate = dates[1]
    }
  }

  public endDateChange(): void {
    this.convertStartAndEndDate.push(this.startDate, this.endDate)
    this.onChange(this.convertStartAndEndDate)
    this.convertStartAndEndDate = [];
  }
}
