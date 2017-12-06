import { HistoryPage } from './../pages/history/history';
import { VipAccessPage } from './../pages/vip-access/vip-access';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JunctionsPage } from '../pages/junctions/junctions';
import { ControlPage } from '../pages/control/control';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    JunctionsPage,
    ControlPage,
    VipAccessPage,
    HistoryPage,
    ProfilePage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JunctionsPage,
    ControlPage,
    VipAccessPage,
    HistoryPage,
    ProfilePage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP
  ]
})
export class AppModule {}
