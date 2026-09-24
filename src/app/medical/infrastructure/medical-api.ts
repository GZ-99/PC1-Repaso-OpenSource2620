import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpecialtyAssembler} from './specialty-assembler';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import {Specialty} from '../domain/model/specialty.entity';
import {SpecialtyResponse} from './specialty-response';

@Service()
export class MedicalApi {
  private readonly http = inject(HttpClient);
  private readonly assembler = inject(SpecialtyAssembler);
  private readonly endPoint = `${environment.medicalApiBaseUrl}`;

  getSpecialtiesByQuery(query: string): Observable<Specialty[]> {
    return this.http.get<SpecialtyResponse>(
      this.endPoint,
      {
        params: {
          q: query
        }
      }
    ).pipe(
      map(response => this.assembler.toEntities(response.specialties))
    );
  }
}
