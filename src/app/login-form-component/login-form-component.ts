import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-component',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent implements OnInit {
  loginForm:any;

  constructor(){
    this.loginForm= new FormGroup({
      todo: new FormControl(''),
      completed: new FormControl(''),
      userId: new FormControl(''),
    })
  }
  ngOnInit(): void {
    
  }
  
  submitForm(): void {
    console.log(this.loginForm);
  }

}
