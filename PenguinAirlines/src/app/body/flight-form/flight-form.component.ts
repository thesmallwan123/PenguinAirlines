import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';

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

  constructor(
    private flights: FlightService,
  ) { }

  ngOnInit() {
    //set FlightTime
    this.flights.flightTime();

  }

}
