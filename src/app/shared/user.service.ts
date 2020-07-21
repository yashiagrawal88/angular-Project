//declare var require: any;
import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
//import { MustMatch } from './_helpers/must-match.validator';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI ='http://localhost:53414/api';
  formModel=this.fb.group({
    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    MobNo:['',Validators.required],
    DOB:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPassword:['',Validators.required]
  });

register()
{
var body = {
  UserName: this.formModel.value.Email,
  Email: this.formModel.value.Email,
 FirstName: this.formModel.value.FirstName,
 LastName: this.formModel.value.LastName,
 MobNo: this.formModel.value.MobNo,
 DOB: this.formModel.value.DOB,
 Password: this.formModel.value.Password 
}
console.log(body);
return this.http.post(this.BaseURI + '/ApplicationUser/Register',body);
}

}
//   , {
//     validator: MustMatch('Password', 'ConfirmPassword')
// }
