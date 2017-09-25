import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  myIndex: number;
  tab1Root = HomePage;
  tab2Root = AboutPage;

  constructor(navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
