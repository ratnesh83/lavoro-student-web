import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  apiBaseUrl;

  constructor(private client: HttpClient, private router: Router) {
    this.apiBaseUrl = environment.apiUrl;
  }

  register(user) {
    return this.client.post(this.apiBaseUrl + '/auth/register', user);
  }

}
