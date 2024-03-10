import {SelectModelInterface} from "../interface/select-model.interface";

export const statusValue: SelectModelInterface[] = [
  {value: 'По плану', viewValue: 'По плану'},
  {value: 'Под угрозой', viewValue: 'Под угрозой'},
  {value: 'Отстает', viewValue: 'Отстает'},
];

export const performers: SelectModelInterface[] = [
  {value: 'Андрей', viewValue: 'Андрей'},
  {value: 'Анастасия', viewValue: 'Анастасия'},
  {value: 'Серёжа', viewValue: 'Серёжа'},
  {value: 'Софья', viewValue: 'Софья'},
];

export const priority: SelectModelInterface[] = [
  {value: 'Низкий', viewValue: 'Низкий'},
  {value: 'Средний', viewValue: 'Средний'},
  {value: 'Высокий', viewValue: 'Высокий'}
];