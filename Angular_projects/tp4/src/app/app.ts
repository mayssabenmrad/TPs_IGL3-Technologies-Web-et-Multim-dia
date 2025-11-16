import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion';
import { ArticlesComponent } from './articles/articles';
import { ProduitsComponent } from './produits/produits';
import { TachesComponent } from './taches/taches';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConnexionComponent, ArticlesComponent, ProduitsComponent, TachesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp4');
}
