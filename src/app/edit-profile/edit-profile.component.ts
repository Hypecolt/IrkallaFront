import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

export class UpdateData{
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;

  constructor(profilePicture: string, firstName: string, lastName: string, email:string, password: string, gender: string){
    this.profilePicture = profilePicture;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less']
})
export class EditProfileComponent implements OnInit {

  updateForm: FormGroup;
  registerPressed = false;
  success:boolean = false;
  errorMessage:string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm():void{
    this.updateForm = this.formBuilder.group({
      profilePicture:[null],
      password:[null, [Validators.minLength(8)]],
      email:[null, [Validators.email]],
      firstName:[null],
      lastName:[null],
      gender:[null]
    });
  }

  userUpdate():void{
    if(this.updateForm.invalid){
      return;
    }
    this.registerPressed = true;

    const updateData: UpdateData = new UpdateData(
      this.profilePicture.value,
      this.firstName.value, 
      this.lastName.value, 
      this.email.value, 
      this.password.value, 
      this.gender.value
    );

    this.userService.update(updateData).subscribe(
      (response:any) => {
        console.log(response);
        window.localStorage.removeItem("firstName");
        window.localStorage.setItem("firstName", response.firstName);
        window.location.assign("http://localhost:4200/myProfile/edit");
        if(response.status) this.success = true;
        else this.errorMessage = response.message
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        
      }
    );
  }

  get profilePicture(): AbstractControl{
    return this.updateForm.get('profilePicture');
  }

  get firstName(): AbstractControl{
    return this.updateForm.get('firstName');
  }

  get lastName(): AbstractControl{
    return this.updateForm.get('lastName');
  }

  get email(): AbstractControl{
    return this.updateForm.get('email');
  }

  get password(): AbstractControl{
    return this.updateForm.get('password');
  }

  get gender(): AbstractControl{
    return this.updateForm.get('gender');
  }

}
