import { Component } from '@angular/core';
import { Station }       from '../../app/model/model';
import { NavController,ToastController } from 'ionic-angular';
import { NavitiaService } from '../../app/services/services';
import { Parser} from '../../app/utils/utils';
import {NFC, Ndef} from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private parser: Parser;
  public station: Station;
  public stationRetour: Station;

  constructor(public navCtrl: NavController, private navitiaService: NavitiaService,private toastCtrl: ToastController) {
  }
  ionViewWillEnter() {
    this.parser = new Parser;
    this.getStations();
  }

  public getStations(): void {
    this.navitiaService
      .getStations()
      .subscribe((data: any) => {
        this.station = this.parser.parse(data,0);
        this.stationRetour = this.parser.parse(data,1);

      },
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }

  doRefresh(refresher) {
    this.getStations();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);
  }

}
