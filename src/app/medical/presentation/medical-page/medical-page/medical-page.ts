import { Component, inject, signal } from '@angular/core';
import { MedicalStore } from '../../../application/medical.store';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-medical-page',
  styleUrl: './medical-page.css',
  templateUrl: './medical-page.html',
})
export class MedicalPage {
  protected readonly store = inject(MedicalStore);
  protected readonly query = signal('Cardiology');

  ngOnInit() {
    this.searchSpecialties();
  }

  searchSpecialties() {
    const query = this.query().trim();
    if (query) {
      this.store.searchSpecialties(query);
    }
  }
}
