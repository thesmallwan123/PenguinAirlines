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
  flightsBooked: flightBooked[] = flightsBooked;
  selectedFlights;

  //Select flights with UserID = user's ID
  flights(){
    this.selectedFlights = flightsBooked.filter(obj => {
      return obj.userId == this.login.activeUser[0].id;
    });
  }
}