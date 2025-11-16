import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css'],
  imports: [CommonModule, FormsModule]
})
export class ConnexionComponent {
  isLoggedIn: boolean = false;
  prenom: string = '';
  messageErreur: string = '';

  basculerConnexion() {
    if (this.prenom === 'Mayssa') {
      this.isLoggedIn = !this.isLoggedIn;
      this.messageErreur = '';
    } else {
      this.messageErreur = "Nom incorrect. Essayez à nouveau.";
    }
  }
}
