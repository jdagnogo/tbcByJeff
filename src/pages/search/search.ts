import { Component } from '@angular/core';
import { Station, Tramway}       from '../../app/model/model';
import { NavController, ToastController, NavParams} from 'ionic-angular';
import { NavitiaService } from '../../app/services/services';
import { Parser} from '../../app/utils/utils';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private parser: Parser;
  public stations: Station[];
  public tramways: Tramway[];
  private link: string;
  constructor(public navCtrl: NavController, private navitiaService: NavitiaService, private toastCtrl: ToastController, public params: NavParams) {

    this.tramways = [

      new Tramway("Hôtel de Ville", "HDVA"),
      new Tramway("Jardin Public", "JPUBL"),
      new Tramway("Stade Chaban Delmas", "CDELM"),
      new Tramway("Gare Saint-Jean", "SJEAN"),
      new Tramway("Hôpital Pellegrin", "HOPIT"),
      new Tramway("Hôtel de Police", "POLIC"),
      new Tramway("Quinconces (tram B)", "QUIN_B"),
      new Tramway("Victoire", "VICTO"),
      new Tramway("France Alouette", "TALOU"),
      new Tramway("Forum", "FORUM"),
      new Tramway("Peixotto", "PEIXOT"),
    ]
  }

  ionViewWillEnter() {
    this.parser = new Parser;
  }

  public getStations(link: string): void {
    this.navitiaService
      .getStations(link)
      .subscribe((data: string) => {
        this.stations = this.parser.parse(data);
      },
      error => console.log(error),
      () => console.log('Get all Stations complete'));
  }
  tramSelected(event) {
    console.log("item selected : " + event);
    this.getStations(event);
  }

}
