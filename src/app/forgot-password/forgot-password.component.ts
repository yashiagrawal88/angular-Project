import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formResetPassword:FormGroup;
  constructor(private  fb:FormBuilder) { 
    this.formResetPassword=this.fb.group({
         ResetPassword:['',[Validators.required,Validators.minLength(6)]],
         NewPassword:['',[Validators.required,Validators.minLength(6)]],
        });
      }
   
     ngOnInit() {
    
     }
   
   }
