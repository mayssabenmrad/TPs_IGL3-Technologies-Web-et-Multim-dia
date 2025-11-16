import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.css'],
  imports:[FormsModule,CommonModule]
})
export class ArticlesComponent {
  articles = [
    { titre: 'Angular 17', contenu: 'Les nouveautés du framework Angular.' },
    { titre: 'TypeScript', contenu: 'Un survol rapide du typage fort.' }
  ];

  nouveauTitre: string = '';
  nouveauContenu: string = '';

  ajouterArticle() {
    if (this.nouveauTitre && this.nouveauContenu) {
      this.articles.push({ titre: this.nouveauTitre, contenu: this.nouveauContenu });
      this.nouveauTitre = '';
      this.nouveauContenu = '';
    }
  }
  articles2 = [
  { titre: 'Angular', contenu: 'Framework frontend', importance: 'élevée' },
  { titre: 'React', contenu: 'Bibliothèque UI', importance: 'moyenne' },
  { titre: 'Vue.js', contenu: 'Framework progressif', importance: 'faible' }
];

}

