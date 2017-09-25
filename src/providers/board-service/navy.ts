import { Injectable } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { App } from "ionic-angular/index";

@Injectable()
export class NavigationProvider {
    private navCtrl: NavController;

    constructor(
        private platform:Platform,
        private app:App
    ){
        platform.ready().then(() => {
          //this.navCtrl = app.getActive();
        });
    }

    backButtonAction() {
        // // can we pop this page?
        // if(this.navCtrl.canGoBack()) {
        //   // are we on the page that we want to trigger the logout alert?
        //   const view = this.navCtrl.getActive();
        //   if(view.component.name == 'DashboardPage') {
        //     // is the logout alert still visible?
        //     if(this.logoutAlert) {
        //       // dismiss it instead :)
        //       this.logoutAlert.dismiss();
        //       this.logoutAlert = null;
        //     } else {
        //       // show the logout alert
        //       this.logoutAlertAction();
        //     }
        //   } else {
        //     //pop the page to perform default back action
        //     this.navCtrl.pop();
        //   }
        // } else {
        //   // we are at the root page so the next step is to exit the app
        //   // is the exit app alert still visible?
        //   if(this.exitAppAlert) {
        //     // dismiss it instead :)
        //     this.exitAppAlert.dismiss();
        //     this.exitAppAlert = null;
        //   } else {
        //     this.exitAppAlertAction();
        //   }
        // }

        const view = this.navCtrl.getActive();
        if(view.component.name == "HomePage"){
            navigator['app'].exitApp();
        }else{
            this.navCtrl.parent.select(0);
        }

    }
}
