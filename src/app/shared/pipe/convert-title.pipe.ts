import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'convert'
})

export class ConvertTitlePipe implements PipeTransform {
  transform(value: any): any {
    return value === "null" ? 'No value' : value;
  }

}
