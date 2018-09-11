import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginComponent } from '../../components/login/login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    LoginComponent,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
