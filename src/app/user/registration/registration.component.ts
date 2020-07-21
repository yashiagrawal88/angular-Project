import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-registration',
 templateUrl: './registration.component.html',
 styleUrls: ['./registration.component.css']

})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService , private toastr:ToastrService) { 
    this.service.formModel.reset();
    //submitted=false;
  }

  ngOnInit() {
    this.service.formModel.reset();
  }
  onSubmit(){
    console.log("test");
this.service.register().subscribe(
(res:any)=>{
  if(res.succeeded)
  {
    this.service.formModel.reset();
    this.toastr.success('New user created','Registration successful');
  }
  else{
    res.errors.array.forEach(element => {
      switch (element.code){
        case 'DuplicateUserName':
          this.toastr.error('Username is already taken','Registration failed');
          
        break;
        default:
          this.toastr.error(element.description,'Registration failed');
        break;
        }
    });
  }
},
err=>{
  console.log(err);
}
);
  }
  isavailable =true;
//   myClickFunction(event){
//     alert("Email has send to your email id. please confirm your email ");
//     console.log(event);
//  }

}
