import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilComponent } from './profil/profil';
import { UtilisateurComponent } from './utilisateur/utilisateur';
import { Adresse } from './adresse/adresse';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfilComponent, UtilisateurComponent, Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp3');
}
