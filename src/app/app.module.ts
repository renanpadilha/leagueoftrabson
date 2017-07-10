import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InvocadorComponent } from './invocador/invocador.component';
import { InvocadorService } from './invocador/invocador.service';

@NgModule({
  declarations: [
    AppComponent,
    InvocadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ InvocadorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
