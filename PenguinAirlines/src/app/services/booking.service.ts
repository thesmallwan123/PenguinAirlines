import { Injectable } from '@angular/core';
import { loginService } from '../services/login-cookie.service';
import { flightsBooked } from '../body/booking/mock-listItems';
import { flightBooked } from '../body/booking/listItem';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private login: loginService,
  ) { }
  user = this.login.findUser();
  flightsBooked: flightBooked[] = flightsBooked;
  selectedFlights;

  //Select flights with UserID = user's ID
  flights(){
    // console.log(this.user)
    this.selectedFlights = flightsBooked.filter(obj => {
      return obj.userId == this.user.id
    });
    return this.selectedFlights;
  }
}