import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';

import { HelperService } from '../core/services/helperService';
import { UserService } from '../core/services/userService';
import { StorageService } from '../core/services/storageService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Dialogs,
    NativeStorage,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    HelperService,
    UserService,
    StorageService
  ]
})
export class AppModule {}
