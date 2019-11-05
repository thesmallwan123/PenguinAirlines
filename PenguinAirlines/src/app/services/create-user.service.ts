import { Injectable } from '@angular/core';
import { user } from '../body/login/listItem'
import { users } from '../body/login/mock-listItems'
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private location: Location) { }
  users: user[] = users;
  userAdd: user[];
  checkIfEmpty(uName, P1, P2, Mail, Fname, Sname, DOB){
    if (uName === '' || P1 === '' || P2 === '' || Mail === '' || Fname === '' || Sname === '' || DOB === ''){
      return false
    }
    else{
      return true
    }
  }
  confirmPassword(P1: string, P2: string){
    if(P1 === P2){
      return true;
    }
    else{
      console.log(P1 + " " + P2);
    }
  }

  addUser(uName, P1, P2, Mail, Fname, Sname, DOB){
    this.userAdd = [{
      id: 4,
      admin: true,
      username: uName,
      password: P1,
      email: Mail,
      loggedIn: false,
    }]
    users.push(this.userAdd[0])
    console.log(users);
  }
}
