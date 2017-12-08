import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JunctionsPage } from './junctions';

@NgModule({
  declarations: [
    JunctionsPage
  ],
  imports: [
    IonicPageModule.forChild(JunctionsPage),
  ]
})
export class JunctionsPageModule {}
