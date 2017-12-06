import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HTTP) {
  }

  ionViewDidLoad() {
  }

  login(un: string, pw: string) {
      let data = {
        'username': un,
        'password': pw
      }

      let headers = {
        'Content-Type': 'application/json'
      };

      this.http.setDataSerializer('json');

      this.http.post('http://stls-server.herokuapp.com/api/user/authenticate', data, headers)
      .then(res => {
    
        console.log(res.status);
        console.log(res.data); 
        console.log(res.headers);
      })
      .catch(error => {
    
        console.log(error.status);
        console.log(error.error); 
        console.log(error.headers);
      });
  }

}
