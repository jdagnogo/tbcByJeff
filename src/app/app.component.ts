import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage,SearchPage } from '../pages/pages.ts';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  constructor(public platform: Platform, public menuCtrl: MenuController) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openMenu() {
    this.menuCtrl.open();
  }
  goStNicolas() {
      this.nav.push(HomePage,{ link: "NICOL" });
    }
  goBergonie(){
    this.nav.push(HomePage,{ link: "BERGO" });
  }

  goUnitec(){
    this.nav.push(HomePage,{ link: "SAIGE" });
  }

  goSearch(){
    this.nav.push(SearchPage);
  }


}
