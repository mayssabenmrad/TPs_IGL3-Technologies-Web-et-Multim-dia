import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  img_url="C:\Users\bmrad\Pictures\Screenshots\einstein";

  afficherProduit(){
    alert("produit ajouté au panier");
  }
enStock: boolean = true;

toggleStock() {
  this.enStock = !this.enStock;
}

}
