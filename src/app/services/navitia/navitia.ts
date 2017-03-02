import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Station } from '../../model/model';


@Injectable()
export class NavitiaService {
  private baseStopSchedules = '/stop_schedules';
  private baseUrl = 'https://api.navitia.io/v1/coverage/fr-sw/stop_areas/stop_area:OBX:SA:';
  private bergonie_url = '';

  private API_Key = '5f25d1a6-635f-4d67-bfe4-ec013661252f';
  //https://api.navitia.io/v1/coverage/fr-sw/stop_areas/stop_area:OBX:SA:NICOL/stop_schedules
  private headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Authorization', 'Basic ' + btoa(this.API_Key));
    this.headers.append('Accept', 'application/json');

  }

  getStations(link:string): Observable<string> {
    return this.http.get(this.baseUrl+link+this.baseStopSchedules, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): any {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return JSON.stringify(res.json());

  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
