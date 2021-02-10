import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
  ){

  }

  ngOnInit(): void{
    this.createForm();
  }

  createForm(): void{
    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]]
    });

  }

  login(): void{
    this.loginPressed = true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      return;
    }

    const registerData: LoginData = new LoginData(this.email.value, this.password.value)

  }

  get email(): AbstractControl{
    return this.loginForm.get('email');
  }

  get password(): AbstractControl{
    return this.loginForm.get('password');
  }

}
