import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
  }

  getJunctionList(userId: number){
    return new Promise((resolve, reject) => {
      this.http.get(`http://stls-server.herokuapp.com/api/user/junctions/${userId}`)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}