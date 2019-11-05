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

//sets cookie and start counter (countMax is the time)
  setCookie() {
    var date = new Date();
    var cookiename = "Title";
    var timeToExpireSeconds = 300;
    var cookieValue = "CookieValueeeeee";
    date.setTime(date.getTime() + (timeToExpireSeconds * 1000));
    document.cookie = cookiename + "=" + cookieValue + "; expires=" + date;
    return true;
  }

  //checks if cookie is set
  checkCookie() {
    if (this.cookie === "Title=CookieValueeeeee") {
      var countMax: number = 2000;
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
      console.log("please login")
    }
  }

  //checks if username is correct
  checkUnamePasswd(uName: string, pWord: string) {
    return this.users.some(function (el) {
      return el.username === uName && el.password === pWord
    })
  }

  //checks if user is admin
  checkIfAdmin(uName: string) {
    const row = this.findItemInObject(users, 'username', uName);
    if (row.admin === true) {
      return true;
    }
    else {
      return false;
    }
  }

  //sets user to loggedIn
  setLoggedIn(uName: string) {
    this.objCol = users.findIndex((obj => obj.username == uName));
    users[this.objCol].loggedIn = true;
    return true
  }

  //checks if user is loggedIn
  checkIfLogedIn(uName: string) {
    const row = this.findItemInObject(users, 'username', uName);
    this.objCol = users.findIndex((obj => obj.username == uName));
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
