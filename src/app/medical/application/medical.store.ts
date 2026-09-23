import {computed, inject, Service, signal} from '@angular/core';
import {BoardCertification} from '../domain/model/board-certification.entity';
import {KeyProcedure} from '../domain/model/key-procedure.entity';
import {Specialty} from '../domain/model/specialty.entity';
import {MedicalApi} from '../infrastructure/medical-api';

@Service()
export class MedicalStore {
  private boardSignal = signal<BoardCertification[]>([]);
  private keySignal = signal<KeyProcedure[]>([]);
  private specialtiesSignal = signal<Record<string, Specialty[]>>({});
  private medicalApi = inject(MedicalApi);

  readonly boards = computed(() => this.boardSignal());
  readonly keys = computed(() => this.keySignal());
  readonly specialties = computed(() => this.specialtiesSignal());
}
