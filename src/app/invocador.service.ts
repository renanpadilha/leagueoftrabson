import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Service {
// private riotUrl = 'https://br1.api.riotgames.com/lol/platform/v3/champions?api_key=RGAPI-f4468757-2734-4c43-8fb1-9a3b43cecc37';
  constructor(private http: Http) {}

  getData() {
    return this.http.get('dados.json')
      .map((res:Response) => res.json().data)
        // .do(data => console.log(JSON.stringify(data)));

  }

}
