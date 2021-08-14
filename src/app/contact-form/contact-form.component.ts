import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];
  Log(value: NgModel) {
    console.log(value.control);
  }

  SubmitContactForm(contactForm: NgForm) {
    console.log('form ', contactForm);
    console.log(contactForm.value);
  }
}
