import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComComponent } from './child/child-com/child-com.component';
import { AutherService } from './Services/auther.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './Pipes/title-case.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './Panels/panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { SwitchcasetestComponent } from './switchcasetest/switchcasetest.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpClientModule } from '@angular/common/http';
import { FollowerDetailsComponent } from './follower-details/follower-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComComponent,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikesComponent,
    SwitchcasetestComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    FollowerDetailsComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AutherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
