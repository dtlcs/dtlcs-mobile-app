import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryPage),
  ]
})
export class HistoryPageModule {}

export class MyPage {
  constructor(public toastCtrl: ToastController) {
  }

  
  }
