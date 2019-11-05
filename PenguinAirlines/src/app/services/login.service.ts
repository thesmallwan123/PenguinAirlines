import { Injectable } from '@angular/core';
import { users } from '../body/login/mock-listItems'
import { user } from '../body/login/listItem';

@Injectable({
  providedIn: 'root'
})
export class CheckCookieService {
//define diffrent variables
  cookieTrue = false;
  cookie = document.cookie;
  objIndex;
  loggedIn: boolean = false;
  users: user[] = users;

//check if cookie is the correct value
  checkCookie() {
    if (this.cookie === "Title=CookieValueeeeee") {
      //After how many seconds you have to login again
      var countMax: number = 3;

      //Deletes cookie after Countmax is 0
      function deleteAllCookies() {
        var mydate = new Date();
        mydate.setTime(mydate.getTime() - 1);
        document.cookie = "username=; expires=" + mydate.toUTCString();
        alert("You have been logged out. \n Please login again");
      }

      //counter to get countMax to 0
      var Timer = setInterval(function () {
        countMax--;
        console.log(countMax);
        if (countMax <= 0) {
          clearInterval(Timer);
          deleteAllCookies();
          countMax = 3;
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

//checks username from formData
  checkUnamePasswd(uName: string, pWord: string) {
    return this.users.some(function (el) {
      return el.username === uName && el.password === pWord
    })
  }

//checks if user is Admin
  checkIfAdmin(uName: string) {
    const row = this.findItemInObject(users, 'username', uName);
    if (row.admin === true) {
      return true;
    }
    else {
      return false;
    }
  }

//Sets user to Logged In
  setLoggedIn(uName: string) {
    this.objIndex = users.findIndex((obj => obj.username == uName));
    users[this.objIndex].loggedIn = true;
    return true
  }

//checks if user is Logged In
  checkIfLogedIn(uName: string) {
    const row = this.findItemInObject(users, 'username', uName);
    this.objIndex = users.findIndex((obj => obj.username == uName));
    if (row.loggedIn === true) {
      return true;
    }
    else {
      return false;
    }
  }

//Finds Row in object where value is in array
  findItemInObject(array: any, key: string, value: any) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }


}
