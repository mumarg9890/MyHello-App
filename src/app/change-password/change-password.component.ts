import {
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonResponse } from '../common/commonResponse';
import { GitHubFollwers } from '../common/Mosh-followers.modal';
import { PostServiceService } from '../Services/post-service.service';
import { ChangePasswordValidators } from './changePassword.Validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  passwordForm: FormGroup;
  gitHubFollowers: GitHubFollwers[] | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostServiceService
  ) {
    this.passwordForm = this.formBuilder.group(
      {
        oldPassword: this.formBuilder.control(
          '',
          [Validators.required, Validators.minLength(3)],
          ChangePasswordValidators.isValidPassword
        ),
        newPassword: this.formBuilder.control('', [Validators.required]),
        confirmPassword: this.formBuilder.control('', [Validators.required]),
      },
      { validator: ChangePasswordValidators.isPasswordMatch }
    );
    console.log(this.passwordForm.get('oldPassword'));
  }

  ngOnInit(): void {
    //this.postService.GetPosts().subscribe((x) => console.log(x));
    //below two metods are working.
    // this.postService.AuthenticateClient().subscribe((x) => {
    //   debugger;
    //   console.log('authenticate client with params', x);
    // });
    // this.postService.login().subscribe((x) => {
    //   debugger;
    //   console.log(x);
    // });

    // display mosh followers assignment github.
    let moshFollowersURL =
      'https://api.github.com/users/mosh-hamedani/followers';
    this.postService
      .getRequest<GitHubFollwers[]>(moshFollowersURL)
      .subscribe((data: CommonResponse<GitHubFollwers[]>) => {
        this.gitHubFollowers = <GitHubFollwers[]>data.Model; //data.Model as unknown as Array<GitHubFollwers>;
        //data.Model as unknown as Array<GitHubFollwers>;
        console.log(this.gitHubFollowers);
      });
  }
  submitChangePassword() {
    console.log(this.passwordForm.value);
  }

  get oldPassword() {
    return this.passwordForm.get('oldPassword') as FormControl;
  }

  get confirmPassord() {
    return this.passwordForm.get('confirmPassword') as FormControl;
  }
}
