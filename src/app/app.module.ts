import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './student/student.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule  ],
  declarations: [ AppComponent, HelloComponent ,UserLoginComponent,StudentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }