import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from './mock-listItems';
import { user } from './listItem';
import { CheckCookieService } from '../../services/login.service';
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
  constructor(private checkCookieService: CheckCookieService, private _location: Location) { }




  ngOnInit() {
  }

formulier = {username:'', password: '',};

users: user[] = users;
  onSubmit(){
    const username = this.form.value.username;
    const password = this.form.value.password;
    if (this.checkCookieService.checkUnamePasswd(username, password) === true){
      if (this.checkCookieService.checkIfAdmin(username) === true){
        if (this.setCookie() === true) {
          this.checkCookieService.checkCookie();
          this.checkCookieService.setLoggedIn(username);
          return this._location.back()
        }
        else{
          console.log(Error)
        }
      }
      else {
        return this._location.back()
      }
    }
    else{
      alert("Please fill in the correct user credentials")
    }
  }






  setCookie() {
    var date = new Date();
    var cookiename = "Title";
    var timeToExpireSeconds = 300;
    var cookieValue = "CookieValueeeeee";
    date.setTime(date.getTime() + (timeToExpireSeconds * 1000));
    document.cookie = cookiename + "=" + cookieValue + "; expires=" + date;
    return true
  }


}
