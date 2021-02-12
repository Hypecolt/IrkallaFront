import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { UserPostsService } from '../services/user-posts.service';
import { UserService } from '../services/user.service';

export class PostData{
  text:string;
  image:string;

  constructor(text:string, image:string){
    this.text = text;
    this.image = image;
  }
}

export class UserDetails{
  userId:number;
  userFirstName:string;
  userLastName:string;
  userProfilePicture:string;

  constructor(userId:number, userFirstName:string, userLastName:string, userProfilePicture:string){
    this.userId = userId;
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userProfilePicture = userProfilePicture;
  }
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit {

  postForm: FormGroup;

  errorMessage: string;
  successMessage:string;
  firstName:string;
  lastName:string;
  profilePicture:string;
  userDetails:UserDetails;
  loading = true;
  posted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private userPostService: UserPostsService,
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.createFrom();
  }

  createFrom():void{
    this.postForm = this.formBuilder.group({
      text:[null],
      image:[null]
    });
  }

  addPost():void{
    const postData: PostData = new PostData(
      this.text.value,
      this.image.value
    );
  
    this.userPostService.createPost(postData).subscribe(
      (respone:any) => {
        console.log(respone);
        this.posted = true;
        this.successMessage = respone.message;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    )

  }

  getUserDetails(){
    this.loading=true;
    this.userService.getDetails().subscribe(
      (userDetails:UserDetails) => {
        this.firstName = userDetails.userFirstName;
        this.lastName = userDetails.userLastName;
        this.profilePicture = userDetails.userProfilePicture;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  get text(): AbstractControl{
    return this.postForm.get('text');
  }

  get image(): AbstractControl{
    return this.postForm.get('image');
  }

}
