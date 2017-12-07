import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  public loginAuth(username, password) {
    let data = {
      'username': username,
      'password': password
    }

    let headers = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return new Promise((resolve, reject) => {
      this.http.post('http://stls-server.herokuapp.com/api/user/authenticate', JSON.stringify(data), headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
