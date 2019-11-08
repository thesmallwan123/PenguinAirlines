import { Injectable, } from '@angular/core';
import { users } from '../body/login/mock-listItems'
import { user } from '../body/login/listItem';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class login {
  constructor(private location: Location) { }

  // allMessagesFinal: message[] = allMessages;

  cookieTrue = false;
  cookie = document.cookie;
  objCol: any;
  loggedIn: boolean = false;
  users: user[] = users; 

  uName = 'noadmin';
  pWord = '';

//sets cookie and start counter (countMax is the time)
  setCookie() {
    var date = new Date();
    var cookiename = "Title";
    var timeToExpireSeconds = 40;
    var cookieValue = "CookieValueeeeee";
    date.setTime(date.getTime() + (timeToExpireSeconds * 1000));
    document.cookie = cookiename + "=" + cookieValue + "; expires=" + date;
    return true;
  }
  checkCounter(){
  if (this.loggedIn === true){
      return false;
    } 
    else{
      return true
    }
  }
  //checks if cookie is set
  checkCookie() {
    if (this.cookie === "Title=CookieValueeeeee" /* Chrome */ || this.cookie === "PHPSESSID=o1fpk2vjgsapts0epmf168ckf5; Title=CookieValueeeeee" /* Firefox */) {
      var countMax: number = 40;
      function deleteAllCookies() {
        var mydate = new Date();
        mydate.setTime(mydate.getTime() - 1);
        document.cookie = "username=; expires=" + mydate.toUTCString();
        alert("You have been logged out. \n Please login again");
      }
      var Timer = setInterval(function () {
        countMax--;
        console.log(countMax);
        if (countMax <= 0) {
          clearInterval(Timer);
          this.mydate = this.mydate;
          deleteAllCookies();
          this.loggedIn = false;
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
    const row = this.findItemInObject(users, 'username', this.uName);
    if (row.admin === true) {
      return true;
    }
    else {
      return false;
    }
  }

  //sets user to loggedIn
  setLoggedIn() {
    this.objCol = users.findIndex((obj => obj.username == this.uName));
    users[this.objCol].loggedIn = true;
    return true
  }

  //checks if user is loggedIn
  checkIfLogedIn() {
    const row = this.findItemInObject(users, 'username', this.uName);
    this.objCol = users.findIndex((obj => obj.username == this.uName));
    if (row.loggedIn === true) {
      return true;
    }
    else {
      return false;
    }
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
}
