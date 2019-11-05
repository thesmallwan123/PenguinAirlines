import { Component, OnInit } from '@angular/core';
import { login } from './services/login-cookie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PenguinAirlines';
  constructor(private login: login,) { }
  ngOnInit(){}
}
