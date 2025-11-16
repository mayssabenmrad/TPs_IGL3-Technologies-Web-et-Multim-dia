import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.html',
  styleUrls: ['./profil.css'],
  imports:[CommonModule,FormsModule]
})
export class ProfilComponent {
  utilisateur = {
    prenom: '',
    age: null
  };
}
