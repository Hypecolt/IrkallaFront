import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

export class LoginData{
  email: string;
  password: string;

  constructor(email:string, password: string){
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPressed = false;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private navRefresh: HeaderComponent,
  ){

  }

  ngOnInit(): void{
    this.createForm();
  }

  createForm(): void{
    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required]],
      password:[null, [Validators.required]]
    });

  }

  login(): void{
    if(this.loginForm.invalid){
      return;
    }
    this.loginPressed = true;

    const loginData: LoginData = new LoginData(
        this.email.value, 
        this.password.value
      );

    this.accountService.login(loginData).subscribe(
      (response:any) => {
        const token = response.token;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("firstName", response.firstName);
        window.location.assign("http://localhost:4200/feed");
        this.navRefresh.ngOnInit();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    )

  }

  get email(): AbstractControl{
    return this.loginForm.get('email');
  }

  get password(): AbstractControl{
    return this.loginForm.get('password');
  }

}
