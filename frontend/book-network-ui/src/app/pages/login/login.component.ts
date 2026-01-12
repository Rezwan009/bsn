import { AuthenticationService } from 'src/app/services/services';
import { AuthenticationRequest } from './../../services/models/authentication-request';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // authRequest: AuthenticationRequest = { email: '', password: '' };
  // errorMsg: Array<String> = [];
  constructor(
    // private authenticationService: AuthenticationService,
    // private router: Router,
    // private tokenService: TokenService

    private keycloakService: KeycloakService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.keycloakService.init();

    await this.keycloakService?.login();
  }

  // login() {
  //   this.errorMsg = [];

  //   this.authenticationService
  //     .authenticate({
  //       body: this.authRequest,
  //     })
  //     .subscribe({
  //       next: (res) => {
  //         this.tokenService.token = res.token as string;
  //         this.router.navigate(['books']);
  //       },
  //       error: (err) => {
  //         if (err.error.validationErrors) {
  //           this.errorMsg = err.error.validationErrors;
  //         } else {
  //           this.errorMsg.push(err.error.error);
  //         }
  //         console.log(err);
  //       },
  //     });
  // }

  // register() {
  //   this.router.navigate(['register']);
  // }
}
