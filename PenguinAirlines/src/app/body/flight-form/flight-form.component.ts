import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  flightOne: string;
  flightTwo: string;

  searchFlight() {
    alert('Search a flight from ' + this.flightOne + ' to ' + this.flightTwo);
  }

  constructor() { }

  ngOnInit() {
  }

}
