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
  lastId = 0;

  //checks if an input is empty
  checkIfEmpty(uName, P1, P2, Mail, Fname, Sname, DOB){
    if (uName === '' || P1 === '' || P2 === '' || Mail === '' || Fname === '' || Sname === '' || DOB === ''){
      return false
    }
    else{
      return true
    }
  }

  //checks if passwords are equal to eachoter
  confirmPassword(P1: string, P2: string){
    if(P1 === P2){
      return true;
    }
    else{
      console.log(P1 + " " + P2);
    }
  }

  //adds user to object users
  addUser(uName, P1, P2, Mail, Fname, Sname, DOB){
    this.lastId = users.length;
    this.userAdd = [{
      id: this.lastId,
      admin: false,
      username: uName,
      password: P1,
      email: Mail,
      loggedIn: false,
      firstName: Fname,
      lastName: Sname,
      DOB: DOB,
    }]
    users.push(this.userAdd[0])
    console.log(users);
  }
}
