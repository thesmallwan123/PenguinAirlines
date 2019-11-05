import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from './mock-listItems';
import { user } from './listItem';
import { login } from '../../services/login-cookie.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: false}) form: NgForm;
  constructor(
    private login: login, 
    private location: Location,
  ) { }



cookieTrue = false;
  ngOnInit() {
    if (this.login.checkIfLogedIn() == true) {
      this.cookieTrue = true;
    }
  }

formulier = {username:'', password: '',};

users: user[] = users;
  loginButton(){
    const username = this.form.value.username;
    const password = this.form.value.password;
    if (this.login.checkCounter() === true){ 
      if (this.login.checkUnamePasswd(username, password) === true){
        if (this.login.checkIfAdmin() === true){
          if (this.login.setCookie() === true) {
            if (this.login.checkCookie() == true){
              this.login.setLoggedIn();
              this.login.back();
            }
          }
          else{
            console.log(Error)
          }
        }
        else {
          this.login.back();
        }
      }
      else{
        alert("Please fill in the correct user credentials")
      }
    }
    else{
      alert("Already logged in")
    }
  }

  redirectNewUser(){
    this.location.go('./')
  }
}
