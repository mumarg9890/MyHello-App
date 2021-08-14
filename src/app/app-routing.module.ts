import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePasswordValidators } from './change-password/changePassword.Validators';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FollowerDetailsComponent } from './follower-details/follower-details.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PanelComponent } from './Panels/panel/panel.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SwitchcasetestComponent } from './switchcasetest/switchcasetest.component';
import { ZippyComponent } from './zippy/zippy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'switchCase',
    component: SwitchcasetestComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'tempForm',
    component: ContactFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'reactiveForms',
    component: SignupFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'formArrayReactive',
    component: NewCourseFormComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'Followers/:followerName/:followerId',
    component: FollowerDetailsComponent,
  },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
