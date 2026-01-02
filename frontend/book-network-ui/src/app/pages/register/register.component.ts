import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RegistrationRequest } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMsg: Array<String> = [];
  registrationRequest: RegistrationRequest = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  register() {
    this.errorMsg = [];

    this.authService
      .register({
        body: this.registrationRequest,
      })
      .subscribe({
        next: (res) => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else {
            this.errorMsg.push(err.error.error);
          }
          console.log(err);
        },
      });
  }

  login() {
    this.router.navigate(['login']);
  }
}
