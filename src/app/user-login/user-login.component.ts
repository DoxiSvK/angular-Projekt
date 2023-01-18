import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  };


  constructor(private router: Router ) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers');
    if(localData!=null){
      this.signupUsers=JSON.parse(localData)
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName:'',
      email:'',
      password:''
    };
  }
  onLogin(){
    const isUserExist=this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password);
    if (isUserExist!=undefined){
      this.router.navigate(['student']);
    } else {
      alert('Wrong Credentials');
    }
  }
}
