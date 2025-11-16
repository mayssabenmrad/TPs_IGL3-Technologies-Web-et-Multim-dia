import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrowserModule, EtudiantFormComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('tpformulaire');
}
