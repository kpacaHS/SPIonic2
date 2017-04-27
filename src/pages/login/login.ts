import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HelperService } from '../../core/services/helperService';
import { UserService } from '../../core/services/userService';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  isAuthenticating: boolean = false;
  credentials: any = {};

  constructor(public navCtrl: NavController, 
    private helperService: HelperService,
    private userService: UserService,
    private dialog: Dialogs) 
  {
  }

  async login(f: NgForm): Promise<void> {
    var hasConnection = await this.helperService.hasNetworkConnection();

    if(hasConnection)
    {
      this.dialog.alert('Success');
    }

    // AuthFactory.setCredential(username, password)

    // explore firebase
    // create own authentication
    var isAuthenticated = await this.userService.authenticate('', '');

    if(isAuthenticated)
    {
      this.dialog.alert('Authenticated');
    }
    else
    {
      this.dialog.alert('Faker!');
    }
  }

  forgotPassword(){}

  goToSupport(){}

  goToSignup(){}


}
