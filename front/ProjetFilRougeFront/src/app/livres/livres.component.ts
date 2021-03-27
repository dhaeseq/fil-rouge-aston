import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/Livre';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  livres: Livre[];
  constructor(private livreService: LivreService,
    private router : Router) {
    // this.livres = livreService.listeLivres();
  }

  ngOnInit(): void {
    this.livreService.listeLivre().subscribe(livres => {
      console.log(livres);
      this.livres= livres;
    });
  }

  // supprimerLivre(livre : Livre){
  //   // console.log(livre);
  //   let conf = confirm("Etes-vous sûr ?");
  // if (conf)
  //   this.livreService.supprimerLivre(livre);

  // }
  supprimerLivre(livre: Livre){
    let conf = confirm("Etes-vous sûr ?");
    if (conf){
      this.livreService.supprimerLivre(livre.reference).subscribe(() => {
        console.log("Livre supprimé");
        this.SuprimerLivreDuTableau(livre);
      });
    }
  }
  SuprimerLivreDuTableau(livre : Livre) {
    this.livres.forEach((cur, index) => {
    if(livre.reference=== cur.reference) {
    this.livres.splice(index, 1);
    }
    });
    }

}
