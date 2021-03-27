import { Component, OnInit } from '@angular/core';
import {Reservation} from "../model/Reservation";
import {ReservationService} from "../services/reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[];
  constructor(private reservationService: ReservationService,
              private router : Router) {
    // this.reservations = reservationService.listeReservations();
  }

  ngOnInit(): void {
    this.reservations = this.reservationService.listeReservation();
  }

  // supprimerReservation(reservation : Reservation){
  //   // console.log(reservation);
  //   let conf = confirm("Etes-vous sûr ?");
  // if (conf)
  //   this.reservationService.supprimerReservation(reservation);

  // }
  supprimerReservation(reservation: Reservation){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.reservationService.supprimerReservation(reservation.idReservation).subscribe(() => {
        console.log("Reservation supprimé");
        this.SuprimerReservationDuTableau(reservation);
      });

  }
  SuprimerReservationDuTableau(reservation : Reservation) {
    this.reservations.forEach((cur, index) => {
      if(reservation.idReservation=== cur.idReservation) {
        this.reservations.splice(index, 1);
      }
    });
  }

}
