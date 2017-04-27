import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelperService } from '../../core/services/helperService';
import { UserService } from '../../core/services/userService';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  isAuthenticating: boolean = false;

  constructor(public navCtrl: NavController, 
    private helperService: HelperService,
    private userService: UserService,
    private dialog: Dialogs) 
  {
  }

  async login(): Promise<void> {
    var hasConnection = await this.helperService.hasNetworkConnection();

    if(hasConnection)
    {
      this.dialog.alert('Success');
    }

    // AuthFactory.setCredential(username, password)

    // explore firebase
    // create own authentication
    // User.authenticate()
  }

  forgotPassword(){}

  goToSupport(){}

  goToSignup(){}


}
