import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.html',
  styleUrls: ['./produits.css'],
   imports: [CommonModule, FormsModule]
})
export class ProduitsComponent {
  produits = [
    { nom: 'PC Portable', stock: 60 },
    { nom: 'Clavier', stock: 35 },
    { nom: 'Souris', stock: 10 }
  ];

  augmenterStock(produit: any) {
    produit.stock += 5;
  }
}
