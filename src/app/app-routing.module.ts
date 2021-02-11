import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path:"", redirectTo:"", pathMatch:"full"
  },
  {
    path:"register",
    canActivate:[LoginGuardService],
    component:RegisterComponent,
  },
  {
    path:"feed",
    canActivate:[AuthGuardService],
    component:FeedComponent,
  },
  {
    path:"myProfile/edit",
    canActivate:[AuthGuardService],
    component:EditProfileComponent,
  },
  {
    path:"myProfile",
    canActivate:[AuthGuardService],
    component:MyProfileComponent,
  },
  {
    path:"allUsers",
    canActivate:[AuthGuardService],
    component:UsersListComponent,
  },
  {
    path:"upd/:id",
    canActivate:[AuthGuardService],
    component:UserPostDetailsComponent,
  },
  {
    path:"login",
    canActivate:[LoginGuardService],
    component:LoginComponent,
  },
  {
    path:"**", 
    component:PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
