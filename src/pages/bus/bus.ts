import { Component } from '@angular/core';
import { NavitiaService } from '../../app/services/services';
import { Station }       from '../../app/model/model';
import { NavController, NavParams } from 'ionic-angular';
import { Parser} from '../../app/utils/utils';

/*
  Generated class for the Bus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bus',
  templateUrl: 'bus.html'
})
export class BusPage {
  public stations: Station[];
  private parser: Parser;
  private stationName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private navitiaService: NavitiaService) { }
  ionViewWillEnter() {
    this.parser = new Parser;
    this.getHours();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusPage');
  }
  public getHours(): void {
    this.navitiaService
      .getHours()
      .subscribe((data: string) => {
        this.stations = this.parser.parseBus(data);
        this.stationName = this.stations[1].nom;
      },
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }

  doRefresh(refresher) {
    this.getHours();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();

    }, 2000);
  }
}
