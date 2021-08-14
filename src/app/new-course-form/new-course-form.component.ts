import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent implements OnInit {
  usersForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.usersForm = this.fb.group({
      users: fb.array([
        fb.group({
          gHService: fb.control('val', [Validators.required]),
          quantity: fb.control('val', [Validators.required]),
          startTime: fb.control('val', [Validators.required]),
          endTime: fb.control('val', [Validators.required]),
          remarks: fb.control('val', [Validators.required]),
        }),
      ]),
    });
  }

  ngOnInit(): void {}

  form = new FormGroup({
    topics: new FormArray([]),
  });
  get topicsArray() {
    return this.form.get('topics') as FormArray;
  }
  AddNewTopic(topic: HTMLInputElement) {
    this.topicsArray.push(new FormControl(topic.value));
    topic.value = '';
  }
  RemoveTopic(topic: AbstractControl) {
    let index = this.topicsArray.controls.indexOf(topic);
    this.topicsArray.removeAt(index);
  }

  get usersArray() {
    return this.usersForm?.get('users') as FormArray;
  }
  removeControl(index: number) {
    this.usersArray.removeAt(index);
  }

  addControl() {
    let newGroup = this.fb.group({
      gHService: this.fb.control('default', [Validators.required]),
      quantity: this.fb.control('default', [Validators.required]),
      startTime: this.fb.control('default', [Validators.required]),
      endTime: this.fb.control('default', [Validators.required]),
      remarks: this.fb.control('default', [Validators.required]),
    });
    this.usersArray.insert(this.usersArray.length, newGroup);
  }

  onUsersSubmit() {
    console.log(this.usersForm?.value);
  }
}
