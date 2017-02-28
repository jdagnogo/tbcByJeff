import { Component } from '@angular/core';
import { Station }       from '../../app/model/model';
import { NavController } from 'ionic-angular';
import { NavitiaService } from '../../app/services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public stations: Station[];

  constructor(public navCtrl: NavController, private navitiaService: NavitiaService) {
  }
  ionViewWillEnter() {
    this.getStations();
  }

  public getStations(): void {
    this.navitiaService
      .getStations()
      .subscribe((data: Station[]) => this.stations = data,
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }
}
