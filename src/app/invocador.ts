
export class Invocador {

	errorMessage: string;
	champions: Champion[];
  	mode = 'Observable';
  	constructor (private invocadorService: InvocadorService) {}
  	ngOnInit() { this.getChampions(); }
  	getChampions() {
    this.invocadorService.getChampions()
                     .subscribe(
                       champions => this.champions = champions,
                       error =>  this.errorMessage = <any>error);
  }
}
