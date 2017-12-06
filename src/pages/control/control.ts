import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-control',
  templateUrl: 'control.html',
})
export class ControlPage {

  public direction: number = 1;

  public lane1IsManual: boolean = false;
  public lane2IsManual: boolean = false;
  public lane3IsManual: boolean = false;

  public lane1State: string = "red";
  public lane2State: string = "red";
  public lane3State: string = "red";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }

  public setLaneManual(laneId:number, value:boolean){

  }

  public setTrafficLightState(laneId:number, state:string){

  }

}
