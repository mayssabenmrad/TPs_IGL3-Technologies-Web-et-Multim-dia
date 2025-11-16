import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-form.html',
  styleUrls: ['./etudiant-form.css']
})
export class EtudiantFormComponent {
  classes = ['IGL', 'IDS', 'ICE'];
  model = new Etudiant(18, 'Mohamed', this.classes[0], 'XYZ');
  submitted = false;

  @ViewChild('etudiantForm') etudiantForm!: NgForm;

  onSubmit() { 
    this.submitted = true; 
    console.log(this.model);
  }

  get diagnostic() { 
    return JSON.stringify(this.model); 
  }

  newEtudiant() {
    this.model = new Etudiant(42, '', '');
  }
}

