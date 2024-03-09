import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrl: './datapicker.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatapickerComponent),
    multi: true
  }]
})
export class DatapickerComponent {

}
