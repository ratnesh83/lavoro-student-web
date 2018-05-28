import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
  apiBaseUrl: string;
  headers;
  token;
  headerToken;
  options;

  constructor(private client: HttpClient, private router: Router) {
    this.apiBaseUrl = environment.apiUrl;
  }

  private appendHeaders(headers: HttpHeaders, customHeaders?) {
    let token = localStorage.getItem('Authorization');
    token = token ? token : '';
    let contentType = 'application/json';
    if (customHeaders && customHeaders.hasOwnProperty('content-type')) {
      contentType = customHeaders['content-type'];
    }
    else if (customHeaders && customHeaders.hasOwnProperty('entity-type')) {
      headers = headers.set('entity-type', customHeaders['entity-type']);
    }
    if (contentType) {
      headers = headers.set('Authorization', token).set('Content-Type', contentType);
    }
    else { }
    return headers;
  }


}
