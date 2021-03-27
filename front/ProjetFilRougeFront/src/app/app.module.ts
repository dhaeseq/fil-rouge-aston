import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AjouterLivreComponent } from './ajouter-livre/ajouter-livre.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsComponent } from './reservations/reservations.component';
import {UpdateReservationComponent} from "./update-reservation/update-reservation.component";


@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AjouterLivreComponent,
    UpdateLivreComponent,
    UpdateReservationComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
