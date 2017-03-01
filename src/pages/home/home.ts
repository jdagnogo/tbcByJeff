import { Component } from '@angular/core';
import { Station }       from '../../app/model/model';
import { NavController } from 'ionic-angular';
import { NavitiaService } from '../../app/services/services';
import { Parser} from '../../app/utils/utils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private parser: Parser;
  public station: Station;

  constructor(public navCtrl: NavController, private navitiaService: NavitiaService) {
  }
  ionViewWillEnter() {
    this.parser = new Parser;
    this.getStations();
  }

  public getStations(): void {
    this.navitiaService
      .getStations()
      .subscribe((data: any) => this.station = this.parser.parse(data),
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }
}
