import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-taches',
  templateUrl: './taches.html',
  styleUrls: ['./taches.css'],
  imports: [CommonModule, FormsModule]
})
export class TachesComponent {
  taches = [
    { description: 'Acheter pc', completee: false, priorite: 'haute' },
    { description: 'Acheter souris', completee: true, priorite: 'moyenne' },
    { description: 'Acheter clavier', completee: false, priorite: 'basse' }
  ];

  toggleTache(tache: any) {
    tache.completee = !tache.completee;
  }
}
