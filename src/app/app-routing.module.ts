import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserPostDetailsComponent } from './user-post-details/user-post-details.component';

const routes: Routes = [
  {
    path:"", redirectTo:"register", pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
  },
  {
    path:"feed",
    canActivate:[AuthGuardService],
    component:FeedComponent,
  },
  {
    path:"upd/:id",
    canActivate:[AuthGuardService],
    component:UserPostDetailsComponent,
  },
  {
    path:"login",
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
