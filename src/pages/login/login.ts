import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProv: AuthProvider, public storage: Storage) {
  }

  ionViewDidLoad() {
  }

  login(username: string, password: string) {
    this.error = null;

    this.authProv.loginAuth(username, password)
      .then(res => {        
        this.storage.set('session-user', res);
        this.navCtrl.setRoot('JunctionsPage');
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }
}
