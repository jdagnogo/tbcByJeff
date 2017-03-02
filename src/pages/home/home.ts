import { Component } from '@angular/core';
import { Station }       from '../../app/model/model';
import { NavController, ToastController, NavParams} from 'ionic-angular';
import { NavitiaService } from '../../app/services/services';
import { Parser} from '../../app/utils/utils';
import {NFC, Ndef} from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private parser: Parser;
  public static BERGO: string = "BERGO";
  public stations: Station[];
  private link: string;
  private stationName:string;

  constructor(public navCtrl: NavController, private navitiaService: NavitiaService, private toastCtrl: ToastController, public params: NavParams) {
  }
  ionViewWillEnter() {
    this.parser = new Parser;

    this.link = this.params.data.link;
    if (this.link == null) {
      this.link = "NICOL";
    }
    this.getStations(this.link);
  }

  public getStations(link: string): void {
    this.navitiaService
      .getStations(link)
      .subscribe((data: string) => {
        this.stations = this.parser.parse(data);
        this.stationName = this.stations[1].nom;
      },
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }

  doRefresh(refresher) {
    this.getStations(this.link);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);
  }

}
