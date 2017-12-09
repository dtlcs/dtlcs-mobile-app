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
    let user = '{"id":1,"first_name":"Oshan","middle_name":"Ivantha","last_name":"Mudannayake","nic":"950722355V","role_id":1,"email":"oshan.ivantha@gmail.com","telephone":"0719084020","street":null,"city":null,"province":null,"postal_code":null,"user_id":1,"username":"ivantha","password":"cat"}';
    this.storage.set('session-user', user);

    this.restProv.getJunctionList(4)
      .then(res => {
        console.log(JSON.stringify(res));
        this.junctionList = res;
      })
      .catch(err => {
        console.log(err.status);
        console.log(err.error);
        console.log(err.headers);
      });
  }

  public setJunction(junction: any){
    this.storage.set('session-junction', junction);
    this.navCtrl.setRoot('ControlPage');
  }
}