import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HelperService } from '../../core/services/helperService';
import { UserService, AuthData} from '../../core/services/userService';
import { Dialogs } from '@ionic-native/dialogs';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  isAuthenticating: boolean = false;
  credentials: SPCredential = new SPCredential();

  //private authData: AuthData = new AuthData(false, '');

  constructor(public navCtrl: NavController, 
    private helperService: HelperService,
    private userService: UserService,
    private dialog: Dialogs) 
  {
  }


  async login(f: NgForm): Promise<void> {
    console.log('login');
    var hasConnection = await this.helperService.hasNetworkConnection();

    if(!hasConnection)
    {
      this.dialog.alert('Success');
      return;
    }

    // i dont think were using this
    // AuthFactory.setCredential(username, password)

    // explore firebase
    // create own authentication
    // no need for .then since there is already await
    /*var authData: any = await this.userService.authenticate(this.credentials.username, this.credentials.password)
                              .catch((data)=>{
                                console.log('login not successful');
                                authData = data;
                              });*/

    /*if(authData.isAuthenticated)
    {
      this.navCtrl.push(HomePage);
    }
    else
    {
      console.log('login not successful...');
    }*/

    this.navCtrl.push(HomePage);
  }

  forgotPassword(){}

  goToSupport(){}

  goToSignup(){}
}

export class SPCredential {

  constructor(){}

  username: string;
  password: string;
}
