import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {ReactiveFormsModule} from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
