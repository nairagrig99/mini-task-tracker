import {Component, Inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {performers, priority, statusValue} from "../../shared/select-value/default-select-value";
import {SelectModelInterface} from "../../shared/interface/select-model.interface";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTaskAction} from "../../shared/store/task-action";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {

  public form!: FormGroup;
  public status: SelectModelInterface[] = statusValue;
  public performers: SelectModelInterface[] = performers;
  public priority: SelectModelInterface[] = priority;

  constructor(private store: Store,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {

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
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.min(3)]],
      name: [null, [Validators.required, Validators.min(3)]],
      performers: [null, Validators.required],
      deadline: [null, Validators.required],
      status: [null, Validators.required],
      priority: [null, Validators.required]
    })
  }

  public addTask(): void {
    if (this.form.valid) {
      const taskID = Math.floor((Math.random() * 1000));
      const mappingFormValue: TaskInterface = {
        id: taskID,
        ...this.form.value
      }
      this.store.dispatch(new AddTaskAction(mappingFormValue));
    }
    this.closeDialog();
  }

  public closeDialog(): void {
    this.dialogRef.close()
  }

}
