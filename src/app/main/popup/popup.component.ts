import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {performers, priority, statusValue} from "../../shared/select-value/default-select-value";
import {SelectModelInterface} from "../../shared/interface/select-model.interface";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  public getTask!: Observable<TaskInterface>
  public form!: FormGroup;
  public status: SelectModelInterface[] = statusValue;
  public performers: SelectModelInterface[] = performers;
  public priority: SelectModelInterface[] = priority;

  constructor(private store: Store,
              private fb: FormBuilder) {

  }

  public get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  public get performersControl(): FormControl {
    return this.form.get('performers') as FormControl;
  }

  public get statusControl(): FormControl {
    return this.form.get('status') as FormControl;
  }

  public get priorityControl(): FormControl {
    return this.form.get('priority') as FormControl;
  }

  public get deadlineControl(): FormControl {
    return this.form.get('deadline') as FormControl;
  }

  public get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  ngOnInit(): void {
    // this.getTask = this.store.select(getTasksList);
    this.initForm();
    this.form.valueChanges.subscribe((s) => {
      console.log('getchangess from parent', s)
    })
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: new FormControl([null]),
      name: new FormControl(null),
      performers: new FormControl([null]),
      deadline: new FormControl(null),
      status: new FormControl(null),
      priority: new FormControl(null),

    })
  }


}
