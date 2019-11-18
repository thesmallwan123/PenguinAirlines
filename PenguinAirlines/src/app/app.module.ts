import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LoginComponent } from './body/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { DestionationComponent } from './body/destionation/destionation.component';
import { BookingComponent } from './body/booking/booking.component';
import { MyTravelsComponent } from './body/my-travels/my-travels.component';
import { CreateUserComponent } from './body/login/create-user/create-user.component';
import { FlightFormComponent } from './body/flight-form/flight-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    DestionationComponent,
    BookingComponent,
    MyTravelsComponent,
    CreateUserComponent,
    FlightFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
