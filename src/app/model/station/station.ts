export class Station {

  constructor(
    public nom: string,
    public id_navitia: string,
    public direction: string,
    public prochainPassage: string[],
  ) {}

}
