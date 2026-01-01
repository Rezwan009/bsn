import { AuthenticationRequest } from './../../services/models/authentication-request';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMsg: Array<String> = [];

  constructor(
    
  ) {

  }


  login() {

  }

  register(){}
}
