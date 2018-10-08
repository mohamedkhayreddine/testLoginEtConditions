import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ConditionsComponent } from './conditions/conditions.component';
import {FormsModule} from '@angular/forms';
import * as $ from 'jquery';
window['$'] = $; window['jQuery'] = $;

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
