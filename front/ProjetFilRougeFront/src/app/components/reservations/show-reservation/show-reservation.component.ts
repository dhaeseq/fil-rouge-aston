import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Reservation} from "../../model/Reservation";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styles: [
  ]
})
export class ShowReservationComponent implements OnInit {
  currentReservation = new Reservation();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.consulterReservation(this.activatedRoute.snapshot.params.reference).
    subscribe( reservation =>{ this.currentReservation = reservation; } ) ;

   }


  // updateLivre(reference : number){
  //   // console.log(this.currentLivre);
  //   this.livreService.updateLivre(reference);
  //   this.router.navigate(["livres"]);
  // }
  updateReservation() {
    this.reservationService.updateReservation(this.currentReservation).subscribe(() => {
      this.router.navigate(['reservations' ]);
      console.log(this.currentReservation);
    },
    (error) => { alert("Problème lors de la modification !"); }
    );
  }

}
