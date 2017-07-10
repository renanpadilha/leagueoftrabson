import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class InvocadorService {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    getSummonerId(nome) {
        return this.http.get('http://localhost:3000/v1/invocador?nome=' + nome)
        .map(res => res.json());
    }

    getStats(summonerId) {
        return this.http
        .get('http://localhost:3000/v1/stats?id=' + summonerId)
        .map(res => res.json());
    }

    getChampions() {
        return this.http
        .get('http://localhost:3000/v1/campeoes')
        .map(res => res.json());
    }

}