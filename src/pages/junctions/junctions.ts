import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-junctions',
  templateUrl: 'junctions.html',
})
export class JunctionsPage {

  public junctionList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public restProv: RestProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('session-user')
      .then((val) => {
        this.restProv.getJunctionList(val.id)
          .then(res => {
            console.log(JSON.stringify(res));
            this.junctionList = res;
          })
          .catch(err => {
            console.log(err.status);
            console.log(err.error);
            console.log(err.headers);
          });
      });
  }

  public setJunction(junction: any) {
    this.storage.set('session-junction', junction);
    this.navCtrl.setRoot('ControlPage');
  }
}