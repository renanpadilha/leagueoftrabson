import { Component, Input } from '@angular/core';
import { InvocadorService } from './invocador.service';

@Component({
    moduleId: module.id,
    selector: 'invocador',
    templateUrl: './invocador.component.html'
})
export class InvocadorComponent {
    errorMessage: string;

    invocador: Object;
    nomeInvocador: string;
    stats: Object;

    service: InvocadorService;

    constructor(service: InvocadorService) {
        this.service = service;
    }

    buscarInvocador(event) {
        event.preventDefault();
        this.service.getSummonerId(this.nomeInvocador)
        .subscribe(invocador => {
            console.log(invocador.id);
            this.invocador = invocador.id;
            this.buscarStats(this.invocador);
        }, error => {
            console.log('Erro ao buscar o ID', error);
        });
    }

    buscarStats (invocador) {
        if(invocador) {
            this.service.getStats(this.invocador)
            .subscribe(
                stats => {
                    console.log(stats);
                    this.stats = stats.champions;
                },
                error => {
                    console.log('Erro ao buscar o stats', error); 
                }
            );
        }
    }
}