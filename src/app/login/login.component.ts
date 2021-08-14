import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnURL: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.returnURL =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.loginForm = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', Validators.required),
    });
  }

  ngOnInit(): void {}
  get userName() {
    return this.loginForm?.get('userName') as FormControl;
  }
  submitLoginForm() {
    console.log(this.loginForm?.value);
    let isLogin: boolean = this.authService.logIn(this.loginForm.value);
    if (isLogin) {
      this.router.navigateByUrl(this.returnURL);
    } else {
      this.loginForm.setErrors({ inValidCredentials: true });
    }
  }
}
