import { Injectable } from '@angular/core';
import { destination } from '../body/flight-form/destinations-listItem';
import { destinations } from '../body/flight-form/destinations-mock-listItems';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }
  
  i: 0;
  destinations1: destination[] = destinations;

//Sets the flightTime
  flightTime(){
    for (this.i = 0; this.i < this.destinations1.length; this.i++) {
      parseInt(this.destinations1[this.i].flightTime[0].hour)

      // Speed plane
      this.destinations1[this.i].flightTime[0].hour = this.destinations1[this.i].distance / 1050

      //splitting data
      this.destinations1[this.i].flightTime[0].hour.toString()
      this.destinations1[this.i].flightTime[0].hour = this.destinations1[this.i].flightTime[0].hour.toString().split(".")

      //Hours
      parseInt(this.destinations1[this.i].flightTime[0].hour[1])

      //minutes
      this.destinations1[this.i].flightTime[0].hour[1] = this.destinations1[this.i].flightTime[0].hour[1] * 60;
      this.destinations1[this.i].flightTime[0].minutes = this.destinations1[this.i].flightTime[0].hour[1].toString().slice(0, 2)
    }
  }
}
