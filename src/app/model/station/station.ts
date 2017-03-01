export class Station {

  private nom: string;
  private id_navitia: string;
  private direction: string;
  private prochainPassage: Array<Date>;

  constructor(nom: string, direction: string, prochainPassage: Array<Date>) {
    this.nom = nom;
    this.direction = direction;
    this.prochainPassage = prochainPassage;

    Station.prototype.toString = function chienToString() {
      var ret = 'arret : ' + this.nom + ' en direction de  ' + this.direction + ', prochainPassage à  ' + this.prochainPassage[0];
      return ret;
    }
  }


}
