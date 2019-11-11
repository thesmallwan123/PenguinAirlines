import { Component, OnInit } from '@angular/core';
import { loginService } from '../../services/login-cookie.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss']
})
export class MyTravelsComponent implements OnInit {
  constructor(
    private login: loginService,
    private booking: BookingService,
  ) { }
  cookieTrue = false;
  ngOnInit() {
    this.cookieTrue = this.login.checkIfLogedIn()
    if(this.cookieTrue == true){
      console.log(this.booking.flights())
    }
  }
}
