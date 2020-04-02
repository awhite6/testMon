import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigurationService } from "./configuration.service";
import { OktaAuthService, OktaAuthGuard } from '@okta/okta-angular';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Injectable()
export class UCMService implements OnInit{
  isAuthenticated: boolean;
  hostUrl: HTMLAnchorElement;
  completeUrl: string;

  constructor(
    private http: HttpClient,
    public configuration: ConfigurationService,
    public oktaAuth: OktaAuthService,
    public router: Router
  ) {
    this.hostUrl = this.getLocation(this.configuration.redirectUri);
    this.completeUrl = `${this.hostUrl.protocol}//${this.hostUrl.host}/api`;
  }

  ngOnInit() {
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  async getIsAuthenticated() {
    return await this.oktaAuth.isAuthenticated();
  }

  async getUserName() {
    return await this.oktaAuth.getUser();
  }

  get(endpoint: string, requestParams: object = {}) {
    let httpParams = new HttpParams();
    _.forEach(requestParams, ((value, key) => {
      httpParams = httpParams.append(key, value);
    }));
    return this.getHeaders()
      .then((httpHeaders) => {
        return this.http.get<any>(`${this.completeUrl}/${endpoint}`, { headers: httpHeaders, params: httpParams });
      })
      .catch(err => { throw err });
   }

  put(endpoint: string, data: any) {
    const body = JSON.stringify(data);
    return this.getHeaders()
      .then((headers) => {
        return this.http.put<any>(`${this.completeUrl}/${endpoint}`, body, { headers: headers });
      })
      .catch(err => { throw err });
  }

  delete(endpoint: string) {
    return this.getHeaders()
      .then((headers) => {
        return this.http.delete<any>(`${this.completeUrl}/${endpoint}`, { headers: headers });
      })
      .catch(err => {
        throw err
      });
  }

  post(endpoint: string, data: any) {
    const body = JSON.stringify(data);
    return this.getHeaders()
      .then((headers) => {
        return this.http.post<any>(`${this.completeUrl}/${endpoint}`, body, { headers: headers });
      })
      .catch(err => {
        throw err
      });
  }

  login() {
    this.oktaAuth.loginRedirect('/');
  }

  async logout() {
    await this.oktaAuth.logout()
      .then(() => this.router.navigateByUrl('/'))
   
  }

  getBearer() {
    return this.oktaAuth.getAccessToken()
        .then((accessToken) => {
            if (!accessToken) throw "No Access Token Found";
            const tokenValue = 'Bearer ' + accessToken;
            return tokenValue;
        })
        .catch(err => {
            throw err
        })
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.getBearer()
        .then(bearer => {
            return headers.set('Authorization', bearer);
        })
  }

  private getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
  }
}
