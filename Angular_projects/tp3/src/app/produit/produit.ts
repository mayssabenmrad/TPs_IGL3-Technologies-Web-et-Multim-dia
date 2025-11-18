import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.html',
  styleUrls: ['./produit.css']
})
export class Produit {

  @Input() nomProduit: string = "";

  @Output() ajouterAuPanier = new EventEmitter<string>();

  prix: number = 250;

  img_url = "assets/produit.jpg";

  enStock: boolean = true;

  toggleStock() {
    this.enStock = !this.enStock;
  }

  envoyerAuPanier() {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}

