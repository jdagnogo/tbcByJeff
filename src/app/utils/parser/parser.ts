import { Station } from '../../model/model';
export class Parser {
private static Nb_PASSAGE:number = 3;
  constructor() { }

  public parse(obj: string,i:number): Station {
    let schedule: any = this.parseSchedules(obj, i);
    let nom = this.parseName(schedule);
    let dates = this.parseDate(schedule);
    let direction = this.parseDirection(schedule);
    let station:Station = new Station(nom, direction, dates);
    console.log('station '+ station.toString());
    return station;
  }

  private parseDate(schedule: any): Array<Date> {
    let dates: Array<Date> = new Array<Date>();
    let date_times: any = schedule.date_times;
    for (var i = 0; i < Parser.Nb_PASSAGE; i++) {
      let date_time = date_times[i].date_time;
      let date = JSON.stringify(date_time);
      dates.push(this.formatDate(date));
    }
    return dates;
  }
  private formatDate(date: string): Date {
    let annee = Number(date.slice(1, 5));
    let mois = Number(date.slice(5, 7));
    let jour = Number(date.slice(7, 9));
    let heure = Number(date.slice(10, 12));
    let minute = Number(date.slice(12, 14));
    let seconde = Number(date.slice(14, 16));
    return new Date(annee, jour, mois, heure, minute, seconde);
  }

  private parseDirection(schedule: any): string {
    let direction: string;
    direction = JSON.stringify(schedule.route.direction.stop_area.label);
    return direction;
  }
  private parseName(schedule: any): string {
    let name: string;
    name = JSON.stringify(schedule.stop_point.name);
    return name;
  }
  private parseSchedules(obj: string, j: number): any {
    let schedules = JSON.parse(obj).stop_schedules;
    return schedules[j];
  }
}
