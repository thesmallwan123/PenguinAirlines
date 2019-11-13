import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateUserService } from '../../../services/create-user.service';
import { Location } from '@angular/common';
import { loginService } from '../../../services/login-cookie.service';     
import { CreateAlertService } from 'src/app/services/create-alert.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('form', { static: false }) form: NgForm;
  constructor(
    private createUser: CreateUserService,
    private login: loginService,
    private location: Location,
    private alert: CreateAlertService,
  ) { }

  ngOnInit() {
    if(this.login.checkIfAdmin() == false){
      this.login.back();
    }
  }

  formulier = { username: '', password: '', passwordConfirm: '', email: '', firstName: '', lastName: '', dateOfBirth: '', };
  create() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    const passwordConfirm = this.form.value.passwordConfirm;
    const email = this.form.value.email;
    const firstName = this.form.value.firstName;
    const lastName = this.form.value.lastName;
    const dateOfBirth = this.form.value.dateOfBirth;
    if(this.createUser.checkIfEmpty(username, password, passwordConfirm, email, firstName, lastName, dateOfBirth) == true){ 
      if(this.createUser.confirmPassword(password, passwordConfirm) == true){
        this.createUser.addUser(username, password, passwordConfirm, email, firstName, lastName, dateOfBirth);
      }  
      else{
        this.alert.addAlert('invalidPassword');
      }
    }
    else{
      this.alert.addAlert('notFilledIn')
    }
  }

}

