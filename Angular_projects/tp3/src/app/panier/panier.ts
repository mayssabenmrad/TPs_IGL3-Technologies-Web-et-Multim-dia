import { Component } from '@angular/core';
import { Produit } from '../produit/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [Produit, CommonModule],
  templateUrl: './panier.html',
  styleUrls: ['./panier.css']
})
export class Panier {

  produitsDansPanier: string[] = [];

  gererAjout(nomProduit: string) {
    this.produitsDansPanier.push(nomProduit);
  }
}
