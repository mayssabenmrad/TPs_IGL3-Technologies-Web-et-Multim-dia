import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Bienvenue} from './exercices/bienvenue/bienvenue';
import {Produit} from './exercices/produit/produit';
import { FormsModule } from '@angular/forms';
import {Utilisateur} from './exercices/utilisateur/utilisateur';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenue, Produit, Utilisateur, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp1');
 
}
