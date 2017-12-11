import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public user: any;
  public uname: string;
  public nic: string;
  public role: string;
  public email: string;
  public telephone: string;
  public street: string;
  public city: string;
  public province: string;
  public postalCode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('session-user')
    .then((val) => {
      this.user = val;

      this.uname = val.name;
      this.nic = val.nic;
      this.email = val.email;
      this.telephone = val.telephone;
      this.street = val.street;
      this.city = val.city;
      console.log(val);
      this.province = val.province;
      this.postalCode = val.postal_code
    });
  }

}
