import {
  Component,
  OnInit
} from '@angular/core';
import {
  destination
} from './listItem';
import {
  destinations
} from './mock-listItems';
import {
  parse
} from 'querystring';

@Component({
  selector: 'app-destionation',
  templateUrl: './destionation.component.html',
  styleUrls: ['./destionation.component.scss']
})
export class DestionationComponent implements OnInit {

  constructor() {}
  i: 0;
  hour;
  minutes;
  seconds;
  destinations1: destination[] = destinations;
  ngOnInit() {
    for (this.i = 0; this.i < this.destinations1.length; this.i++) {
      parseInt(this.destinations1[this.i].flightTime[0].hour)


      this.destinations1[this.i].flightTime[0].hour = this.destinations1[this.i].distance / 1050
      this.destinations1[this.i].flightTime[0].hour.toString()
      this.hour = this.destinations1[this.i].flightTime[0].hour;
      this.destinations1[this.i].flightTime[0].hour = this.destinations1[this.i].flightTime[0].hour.toString().split(".")

      //Hours
      parseInt(this.destinations1[this.i].flightTime[0].hour[1])

      //minutes
      this.destinations1[this.i].flightTime[0].hour[1] = this.destinations1[this.i].flightTime[0].hour[1] * 60;
      this.destinations1[this.i].flightTime[0].minutes = this.destinations1[this.i].flightTime[0].hour[1].toString().slice(0, 2)
    }
  }
}
