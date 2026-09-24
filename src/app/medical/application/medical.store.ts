import {computed, inject, Service, signal} from '@angular/core';
import {Specialty} from '../domain/model/specialty.entity';
import {MedicalApi} from '../infrastructure/medical-api';
import {finalize} from 'rxjs';

@Service()
export class MedicalStore {
  private readonly MedicalApi = inject(MedicalApi);
  private readonly specialtyState = signal<Specialty[]>([]);
  private readonly loadingState = signal<boolean>(false);
  private readonly errorState = signal<string | null>('');

  readonly specialties = computed(() => this.specialtyState());
  readonly loading = computed(() => this.loadingState());
  readonly error = computed(() => this.errorState());

  searchSpecialties(query: string): void {
    this.loadingState.set(true);
    this.errorState.set('');
    this.MedicalApi.getSpecialtiesByQuery(query)
      .pipe(finalize(() => this.loadingState.set(false)))
      .subscribe({
        next: (specialties) => {
          this.specialtyState.set(specialties);
        },
        error: (error) => {
          this.errorState.set(error.message);
          this.loadingState.set(false);
        },
      });
  }
}
