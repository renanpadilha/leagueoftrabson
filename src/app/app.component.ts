import { Component } from '@angular/core';
import {InvocadorService} from './invocador.service';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InvocadorService]
})
export class AppComponent {
  title = 'League Of Trabson';
}