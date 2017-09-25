import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

export interface PageInterface{
  title : string;
  name : string;
  component : any;
  icon : string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  //사이드 메뉴 목록
  // pages: Array<{title:string,component:any}>;
  // pages : PageInterface[] = [
  //   {title : 'Home', name:'HomePage',component: HomePage, tabComponent:HomePage, index:0,icon:'home'},
  //   {title : 'List', name:'ListPage', component: ListPage, tabComponent: HomePage, index:2,icon: 'list' },
  // ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(
        () => {
          navigator['app'].exitApp();
        }
      )
    });
  }

  //페이지 이동
  // openPage(page: PageInterface){
  //   let params = {};
  //
  //   if(page.index){
  //     params = {tabindex:page.index};
  //   }
  //
  //   if (this.nav.getActiveChildNavs().length && page.index != undefined) {
  //     this.nav.getActiveChildNavs()[0].select(page.index);
  //   } else {
  //     this.nav.setRoot(page.component);
  //   }
  // }

  viewDidLoad(){

  }
}
