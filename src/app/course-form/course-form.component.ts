import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  courseCategories = [
    { id: 1, name: 'Development' },
    { id: 1, name: 'Art' },
    { id: 1, name: 'Languages' },
  ];
  SubmitCourseForm(form: NgForm) {
    console.log('course form', form);
  }
}
