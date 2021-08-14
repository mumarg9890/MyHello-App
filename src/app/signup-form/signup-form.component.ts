import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsernameValidators } from './UserName.Validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  signUpform = new FormGroup({
    userName: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.CannotContainSpace,
      ],
      UsernameValidators.ShouldBeUnique
    ),
    password: new FormControl('', Validators.required),
    account: new FormGroup({
      userName: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.CannotContainSpace,
        ],
        UsernameValidators.ShouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  get userName() {
    return this.signUpform.get('userName');
  }

  get groupUserName() {
    return this.signUpform.get('account.userName');
  }

  login() {
    // this.signUpform.setErrors({ inValidLogin: true });
    console.log('reactiveForm SignUp Value', this.signUpform.value);
  }
}
