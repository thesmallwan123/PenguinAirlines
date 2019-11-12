import { Component, OnInit, OnDestroy } from '@angular/core';
import { loginService } from '../../services/login-cookie.service';
import { BookingService } from '../../services/booking.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss']
})
export class MyTravelsComponent {
  constructor(
    private login: loginService,
    private booking: BookingService,
  ) { }
  cookieTrue = false;
  selectedFlights;

  ngOnInit() {
    this.cookieTrue = this.login.checkIfLogedIn();
    if(this.cookieTrue == true){
      this.booking.flights();
      this.selectedFlights = this.booking.selectedFlights;
      console.log(this.selectedFlights)
    }
    if(this.cookieTrue == false){
      alert("please login first")
      this.login.goLocation('/login')
    }
  }
}
