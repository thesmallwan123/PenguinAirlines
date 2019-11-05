import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './body/booking/booking.component';
import { DestionationComponent } from './body/destionation/destionation.component';
import { LoginComponent } from './body/login/login.component';
import { CreateUserComponent } from './body/login/create-user/create-user.component';
import { MyTravelsComponent } from './body/my-travels/my-travels.component';
import { FlightFormComponent } from './body/flight-form/flight-form.component';


const routes: Routes = [
  { path: '', component: FlightFormComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'destination', component: DestionationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'my-travels', component: MyTravelsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
