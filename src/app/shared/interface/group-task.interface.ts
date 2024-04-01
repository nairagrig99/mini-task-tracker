import {TaskInterface} from "./task-interface";

export interface GroupTaskInterface {
  [key: string]: TaskInterface[];
}
