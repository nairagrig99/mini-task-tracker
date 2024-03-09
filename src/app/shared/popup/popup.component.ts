import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TaskInterface} from "../interface/task-interface";
import {getTasksList} from "../store/task-store";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  public getTask!: Observable<TaskInterface>

  constructor(private store: Store,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // @ts-ignore
    // this.getTask = this.store.select(getTasksList);

  }

  private initForm(): void {
    this.fb.group({

    })
  }

}
