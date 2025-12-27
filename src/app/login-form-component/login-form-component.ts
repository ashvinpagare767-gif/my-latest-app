import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserListComponent } from '../user-list-component/user-list-component';

@Component({
  selector: 'app-login-form-component',
  imports: [ReactiveFormsModule,FormsModule,UserListComponent],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent implements OnInit {
  loginForm:any;

  constructor(){
    this.loginForm= new FormGroup({
      name: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
    
  }
  
  submitForm(): void {
    console.log(this.loginForm);
  }

}
