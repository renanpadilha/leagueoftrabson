import { Component, Input } from '@angular/core';
import { InvocadorService } from './invocador.service';
import * as _ from 'lodash';

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
    champions: Object;
    service: InvocadorService;

    constructor(service: InvocadorService) {
        this.service = service;
    }

    buscarInvocador(event) {
        event.preventDefault();
        this.buscarCampeoes();
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
                    _.each(this.champions, champ => {
                        _.each(this.stats, stat => {
                            if(champ.id === stat.id) {
                                stat.id = champ.name;
                            }
                        });
                    });
                },
                error => {
                    console.log('Erro ao buscar o stats', error); 
                }
            );
        }
    }

    buscarCampeoes() {
        this.service.getChampions()
        .subscribe(
            champions => {
                console.log(champions);
                this.champions = champions.data;
            },
            error => {
                console.log('Erro ao buscar o stats', error); 
            }
        );
    }
}