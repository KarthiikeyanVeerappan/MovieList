import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){
  let UserArray=[];
  if(localStorage.getItem('Users')){
    UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
  }
  return user;
  //return UserArray.find((obj: { userName: any; password: any; }) => obj.userName === user.userName && obj.password === user.password)
}

}
