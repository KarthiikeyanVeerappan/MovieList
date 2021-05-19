import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  OnLogin(LoginForm:NgForm){
    console.log(LoginForm.value);
    const token = this.authService.authUser(LoginForm.value);

    if(token){
      localStorage.setItem('token',token.userName);
      console.log("Login successful..")
      this.router.navigate(['/']);
    }else{
      console.log("Login failed..");
    }
  }

}
