import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { strictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CreateAlertService {

  constructor() { }

  addAlert(type: string){
    switch(type){
      case 'timeLoggedOut':
        Swal.fire({
          title: 'Logged out',
          text: 'You have been logged out',
          icon: 'error',
          showCancelButton: false,
        })
        break;

      case 'loggedOutClicked':
        Swal.fire({
          title: 'Logged out',
          text: 'You have been logged out',
          icon: 'warn',
          showCancelButton: false,
        })
        break;

      case 'alreadyLoggedIn':
        Swal.fire({
          title:'already loggedIn',
          text:'There is already an account logged in, Please logout first',
          icon: 'error',
          showCancelButton: false,
        })
        break;

        case 'invalidPassword':
          Swal.fire({
            title:'Wrong password',
            text: 'The 2 passwords you filled in do not match',
            icon: 'error',
            showCancelButton: false,
          })
          break;

        case 'notFilledIn':
          Swal.fire({
            title: 'Not filled in',
            text: 'Please fill in all the inputfields',
            icon: 'error',
            showCancelButton: false,
          })
          break;

          case 'incorrectCredentials':
            Swal.fire({
              title: 'Wrong Credentials',
              text:'Please fill in the correct credentials',
              icon: 'error',
              showCancelButton: false,
            })
            break;

          case 'firstLogin':
              Swal.fire({
                title: 'Please login',
                text:'For this page, you need to be logged in',
                icon: 'error',
                showCancelButton: false,
              })
              break;

          case 'addedUser':
              Swal.fire({
                title: 'User added',
                text:'The user is added in our database',
                icon: 'success',
                showCancelButton: false,
              })
              break;
    }
  }
}
