import { Injectable } from '@angular/core';
import { user } from '../body/login/listItem'
import { users } from '../body/login/mock-listItems'
import { Location } from '@angular/common';
import { CreateAlertService } from './create-alert.service';
import { loginService } from './login-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(
    private location: Location,
    private alert: CreateAlertService,
    private login: loginService,
    ) { }
  users: user[] = users;
  userAdd: user[];
  lastId = 0;
  isAdmin = false;

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
      return false;
    }
  }

  //adds user to object users
  addUser(uName, admin, P1, Mail, Fname, Sname, DOB,){
    this.lastId = users.length;
    this.userAdd = [{
      id: this.lastId,
      admin: admin,
      username: uName,
      password: P1,
      email: Mail,
      loggedIn: false,
      firstName: Fname,
      lastName: Sname,
      DOB: DOB,
    }]
    users.push(this.userAdd[0])
    this.alert.addAlert('addedUser');
    console.log(this.userAdd)
    this.login.goLocation('./');
  }
}
