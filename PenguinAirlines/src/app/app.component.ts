import { Component, OnInit } from '@angular/core';
import { loginService } from './services/login-cookie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PenguinAirlines';
  constructor(private login: loginService,) { }
  ngOnInit(){}
}
