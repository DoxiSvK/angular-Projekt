import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router ) { }

  ngOnInit(): void { }

  onLogin() {
    if (this.loginObj.userName === 'boss' && this.loginObj.password === 'boss1') {
      this.router.navigate(['student']);
    } else {
      alert('Zlé meno alebo heslo');
    }
  }
}
