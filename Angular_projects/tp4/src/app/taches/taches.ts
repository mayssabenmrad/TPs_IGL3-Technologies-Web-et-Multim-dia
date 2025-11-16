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
    { description: 'Faire les courses', completee: false, priorite: 'haute' },
    { description: 'Réviser Angular', completee: true, priorite: 'moyenne' },
    { description: 'Sortir le chien', completee: false, priorite: 'basse' }
  ];

  toggleTache(tache: any) {
    tache.completee = !tache.completee;
  }
}
