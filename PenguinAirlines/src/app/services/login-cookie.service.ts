import { Injectable, } from '@angular/core';
import { users } from '../body/login/mock-listItems'
import { user } from '../body/login/listItem';
import { activeUser } from '../body/login/activeUser';

import { Location } from '@angular/common';
import { Router } from '@angular/router'
import { CreateAlertService } from './create-alert.service';

@Injectable({
  providedIn: 'root'
})

export class loginService {
  constructor(
    private location: Location,
    private router: Router,
    private alert: CreateAlertService,
    ) { }

  // allMessagesFinal: message[] = allMessages;

  cookieTrue = false;
  cookie = document.cookie;
  objCol: any;
  loggedIn: boolean = false;
  users: user[] = users; 
  activeUser: user[] = activeUser; 

  uName;
  pWord;

  //sets cookie and start counter (countMax is the time)
  setCookie() {
    var date = new Date();
    var cookiename = "Title";
    var timeToExpireSeconds = 4000;
    var cookieValue = "CookieValueeeeee";
    date.setTime(date.getTime() + (timeToExpireSeconds * 1000));
    document.cookie = cookiename + "=" + cookieValue + "; expires=" + date;
    return true;
  }

  //check if a user is active
  checkIfLogedIn(){
    if (activeUser.length > 0){
      return true;
    } 
    else{
      return false;
    }
  }
  //checks if cookie is set
  checkCookie() {
    if (this.cookie === "Title=CookieValueeeeee" /* Chrome */ || this.cookie === "PHPSESSID=o1fpk2vjgsapts0epmf168ckf5; Title=CookieValueeeeee" /* Firefox */) {
      var countMax: number = 4000;
      function deleteAllCookies() {
        var mydate = new Date();
        mydate.setTime(mydate.getTime() - 1);
        document.cookie = "username=; expires=" + mydate.toUTCString();
      }
      var Timer = setInterval(function () {
        countMax--;
        console.log(countMax);
        if (countMax <= 0) {
          clearInterval(Timer);
          this.mydate = this.mydate;
          deleteAllCookies();
          this.loggedIn = false;
          alert('You have been logged out')
          location.replace("./login")
        }
      }, 1000);
      return this.loggedIn = true;
    }
    else{
      console.log(this.cookie)
    }
  }

  //checks if username is correct
  checkUnamePasswd(uName: string, pWord: string) {
    this.uName = uName;
    this.pWord = pWord;
    return this.users.some(function (el) {
      return el.username === uName && el.password === pWord
    })
  }

  //checks if user is admin
  checkIfAdmin() {
    if(this.checkIfLogedIn() == true){
      if (activeUser[0].admin === true) {
        return true;
      }
      else {
        return false;
      }
    }
    else{
      return false;
    }
  }

  //sets user to loggedIn
  setLoggedIn() {
    this.objCol = users.findIndex((obj => obj.username == this.uName));
    activeUser.push(users[this.objCol])
    return true
  }

  //Finds row in array where value = imprted value
  findItemInObject(array: any, key: string, value: any) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }
  
  //Location back
  back() {
    return this.location.back();
  }

  //go to Loacation
  goLocation(url){
    this.router.navigate([url])
  }
}
