import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from './mock-listItems';
import { user } from './listItem';
import { loginService } from '../../services/login-cookie.service';
import { Location } from '@angular/common';
;
import { CreateAlertService } from 'src/app/services/create-alert.service';

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
    private login: loginService, 
    private location: Location,
    private alert: CreateAlertService,
  ) { }



cookieTrue = false;
isAdmin = false;
  ngOnInit() {
    this.isAdmin = this.login.checkIfAdmin();
  }

formulier = {username:'', password: '',};

users: user[] = users;
  loginButton(){
    const username = this.form.value.username;
    const password = this.form.value.password;
    if (this.login.checkIfLogedIn() == false){ 
      if (this.login.checkUnamePasswd(username, password) === true){
        this.login.setLoggedIn();
        this.login.setCookie();
        this.login.checkCookie();
        this.login.back();
      }
      else {
        this.alert.addAlert('incorrectCredentials');
      } 
    }
    else {
      this.alert.addAlert('alreadyLoggedIn');
    }
  }
}
