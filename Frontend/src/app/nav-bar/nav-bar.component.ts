import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  a:number=10;
  b:number=20;

  ngOnInit() {
  }

  logggedIn(){
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['User/login']);
  }
}
