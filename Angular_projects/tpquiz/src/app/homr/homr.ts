import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-homr',
  imports: [CommonModule, FormsModule],
  templateUrl: './homr.html',
  styleUrl: './homr.css',
})
export class Homr {
    constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/game']);
  }

}
