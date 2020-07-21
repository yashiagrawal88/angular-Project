import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
  children:[
   {path:'registration',component : RegistrationComponent}
  ]},
   {
     path:'forgotpassword',
     component:ForgotPasswordComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }