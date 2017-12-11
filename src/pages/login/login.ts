import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProv: AuthProvider,
    public storage: Storage, public alertCtrl: AlertController, public loading: LoadingController) {
  }

  ionViewDidLoad() {
  }

  login(username: string, password: string) {
    this.error = null;

    let loader = this.loading.create({
      content: 'Logging in...',
    });

    loader.present().then(() => {
      this.authProv.loginAuth(username, password)
        .then(res => {
          this.storage.set('session-user', res[0]);
          this.navCtrl.setRoot('JunctionsPage');
          loader.dismiss();
        })
        .catch(err => {
          console.log(err.status);
          console.log(err.error);
          console.log(err.headers);

          // if (err.status == 400) {
          //   this.error = 'Your username/password is incorrect. Please try again';
          // }

          let alert = this.alertCtrl.create({
            title: 'Login error',
            subTitle: 'Username / password incorrect. Please try again.',
            buttons: ['OK']
          });
          alert.present();

          loader.dismiss();
        });
    });


  }
}
