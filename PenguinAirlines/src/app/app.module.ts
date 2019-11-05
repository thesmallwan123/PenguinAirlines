import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { DestionationComponent } from './body/destionation/destionation.component';
import { LoginComponent } from './body/login/login.component';
import { BookingComponent } from './body/booking/booking.component';
import { MyTravelsComponent } from './body/my-travels/my-travels.component';
import { CreateUserComponent } from './body/login/create-user/create-user.component';
import { FlightFormComponent } from './body/flight-form/flight-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    DestionationComponent,
    LoginComponent,
    BookingComponent,
    MyTravelsComponent,
    CreateUserComponent,
    FlightFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
