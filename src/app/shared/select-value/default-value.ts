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

export const sortTask: SelectModelInterface[] = [
  {value: 'Статус', viewValue: 'Статус'},
  {value: 'Исполнитель', viewValue: 'Исполнитель'},
  {value: 'Деадлине', viewValue: 'Деадлине'}
];

export const groupBy: SelectModelInterface[] = [
  {value: 'status', viewValue: 'Статус'},
  {value: 'priority', viewValue: 'Приоритет'},
];

export const displayedColumns: string[] = ['title', 'name', 'deadline', 'status', 'priority', 'performers'];
