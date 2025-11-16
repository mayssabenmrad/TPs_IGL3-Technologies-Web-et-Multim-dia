import { bootstrapApplication } from '@angular/platform-browser';
import { EtudiantFormComponent } from './app/etudiant-form/etudiant-form';

bootstrapApplication(EtudiantFormComponent)
  .catch((err) => console.error(err));
