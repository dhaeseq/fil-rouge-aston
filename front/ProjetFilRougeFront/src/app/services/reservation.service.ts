import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiURL: string = environment.apiUrl+'reservations';

  reservations: Reservation[];
  constructor(private http :HttpClient) {
  }

  listeReservation(): Reservation[] {
    return [
      {  livre: { reference: 1211, titre: "JAVA JEE", genre: "Programation", quantite: 300, auteur: "Phillipe" },
        client: {nom: 'Aly'},
        idReservation: 1,
        dateReservation: new Date(),
        dateRetrait: new Date(2021,3,30)
      },
      {  livre: { reference: 17110, titre: "Ansible", genre: "Automatisation", quantite: 28, auteur: "Marcel" },
        client: {nom: 'Aly'},
        idReservation: 1,
        dateReservation: new Date(),
        dateRetrait: new Date(2021,3,30)
      },
      {  livre: { reference: 1031795, titre: "Scrum", genre: "Gestion projet", quantite: 5, auteur: "Ronaldo" },
        client: {nom: 'Aly'},
        idReservation: 1,
        dateReservation: new Date(),
        dateRetrait: new Date(2021,3,30)
      },
      {  livre: { reference: 211, titre: "Docker", genre: "Deploiement", quantite: 100, auteur: "Messi" },
        client: {nom: 'Aly'},
        idReservation: 1,
        dateReservation: new Date(),
        dateRetrait: new Date(2021,3,30)
      }
    ];
  }
  // listeReservation(): Observable<Reservation[]>{
  //   return this.http.get<Reservation[]>(this.apiURL);
  // }
  // ajouterLivre(reservation : Reservation){
  //   this.reservations.push(reservation);
  // }
  ajouterReservation( reservation: Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(this.apiURL, reservation, httpOptions);
    }

  // supprimerLivre( reservation: Reservation){
  //   const index = this.reservations.indexOf(reservation, 0);
  //   if (index > -1) {
  //   this.reservations.splice(index, 1);
  //   }
  supprimerReservation(ref : number) {
    const url = `${this.apiURL}/${ref}`;
    return this.http.delete(url, httpOptions);
    }

    // consulterLivre(id:number): Reservation{
    //   return this.reservations.find(l => l.reference== id);

    //   }

    consulterReservation(reference: number): Observable<Reservation> {
      const url = `${this.apiURL}/${reference}`;
      return this.http.get<Reservation>(url);
      }

  //     updateLivre(l:Reservation){
  //   // console.log(p);
  //     this.supprimerLivre(l);
  //     this.ajouterLivre(l);

  // }
  updateReservation(reservation : Reservation) : Observable<Reservation> {
    return this.http.put<Reservation>(this.apiURL+"/"+reservation.idReservation, reservation, httpOptions);
  }
}
