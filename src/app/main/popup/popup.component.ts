import {Component, Inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {TaskInterface} from "../../shared/interface/task-interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {performers, priority, statusValue} from "../../shared/select-value/default-value";
import {SelectModelInterface} from "../../shared/interface/select-model.interface";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddTaskAction, UpdateTaskAction} from "../../shared/store/task-action";
import {Update} from "@ngrx/entity";

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
              @Inject(MAT_DIALOG_DATA) public data: any) {
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
    this.initForm();
    this.getEditTaskData();
  }

  private initForm(): void {

    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.min(3)]],
      name: [null],
      performers: [null],
      deadline: [null],
      status: [null],
      priority: [null]
    })
  }


  public closeDialog(): void {
    this.dialogRef.close()
  }

  private getEditTaskData(): void {
    if (!!this.data) {
      this.titleControl.setValue(this.data.editTask.title);
      this.nameControl.setValue(this.data.editTask.name);
      this.performersControl.setValue(this.data.editTask.performers)
      this.statusControl.setValue(this.data.editTask.status)
      this.priorityControl.setValue(this.data.editTask.priority)
      this.deadlineControl.setValue(this.data.editTask.deadline)
    }
  }

  public addTask(): void {
    if (this.form.valid) {
      const taskID = Math.floor((Math.random() * 1000));
      const mappingFormValue: TaskInterface = {
        id: taskID,
        ...this.form.value
      }
      this.store.dispatch(new AddTaskAction(mappingFormValue));
      this.closeDialog();
    }

  }

  public updateTask(): void {
    if (this.form.valid) {
      const mappingFormValue: TaskInterface = {
        id: this.data.editTask.id,
        ...this.form.value
      }
      this.store.dispatch(new UpdateTaskAction(mappingFormValue))
      this.dialogRef.close();
    }


  }

}
