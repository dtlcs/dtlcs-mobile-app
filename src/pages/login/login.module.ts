import { AuthProvider } from './../../providers/auth/auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    AuthProvider
  ]
})
export class LoginPageModule {}
