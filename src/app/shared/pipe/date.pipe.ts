import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'datePipe'
})

export class DatePipe implements PipeTransform {
  transform(value: []): any {
    let month: string = '';
    let days: string[] = [];
    value.forEach((dateItem: Date) => {
      const date: string[] = dateItem.toString().split(' ').splice(1, 2)
      month = date[0];
      days.push(date[1]);
    });
    return `${month}  ${days[0]} - ${days[1]}`
  }
}
