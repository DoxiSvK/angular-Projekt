import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StudentComponent } from './student/student.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'student', component: StudentComponent },

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }