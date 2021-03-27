import { Injectable } from '@angular/core';
import { Livre } from '../model/Livre';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  apiURL: string = environment.apiUrl+'livres';

  livres: Livre[];
  constructor(private http :HttpClient) {
    // this.livres = [
    //   { idLivre: "12e11", titre: "JAVA JEE", genre: "Programation", quantite: 300, auteur: "Phillipe" },
    //   { idLivre: "17efc110", titre: "Ansible", genre: "Automatisation", quantite: 28, auteur: "Marcel" },
    //   { idLivre: "103eff1795", titre: "Scrum", genre: "Gestion projet", quantite: 5, auteur: "Ronaldo" },
    //   { idLivre: "a2e1fc1", titre: "Docker", genre: "Deploiement", quantite: 100, auteur: "Messi" }
    // ];
  }
  // listeLivres(): Livre[] {
  //   return this.livres;
  // }
  listeLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    }
  // ajouterLivre(livre : Livre){
  //   this.livres.push(livre);
  // }
  ajouterLivre( livre: Livre):Observable<Livre>{
    return this.http.post<Livre>(this.apiURL, livre, httpOptions);
    }

  // supprimerLivre( livre: Livre){
  //   const index = this.livres.indexOf(livre, 0);
  //   if (index > -1) {
  //   this.livres.splice(index, 1);
  //   }
  supprimerLivre(ref : number) {
    const url = `${this.apiURL}/${ref}`;
    return this.http.delete(url, httpOptions);
    }

    // consulterLivre(id:number): Livre{
    //   return this.livres.find(l => l.reference== id);

    //   }

    consulterLivre(reference: number): Observable<Livre> {
      const url = `${this.apiURL}/${reference}`;
      return this.http.get<Livre>(url);
      }

  //     updateLivre(l:Livre){
  //   // console.log(p);
  //     this.supprimerLivre(l);
  //     this.ajouterLivre(l);

  // }
  updateLivre(livre : Livre) : Observable<Livre> {
    return this.http.put<Livre>(this.apiURL+"/"+livre.reference, livre, httpOptions);
  }
}
