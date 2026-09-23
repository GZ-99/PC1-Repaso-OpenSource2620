import {inject, Service} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BoardCertificationAssembler} from './board-certification-assembler';
import {KeyProcedureAssembler} from './key-procedure-assembler';
import {SpecialtyAssembler} from './specialty-assembler';
import {map, Observable} from 'rxjs';
import {BoardCertification} from '../domain/model/board-certification.entity';
import {BoardCertificationResponse} from './board-certification-response';
import {KeyProcedure} from '../domain/model/key-procedure.entity';
import {KeyProcedureResponse} from './key-procedure-response';
import {Specialty} from '../domain/model/specialty.entity';
import {TopHeadlinesResponse} from './top-headlines-response';

@Service()
export class MedicalApi {
  private baseUrl = environment.medicalProviderApiBaseUrl;
  private medicalEndpoint = environment.medicalProviderSpecialtyEndpointPath;
  private boardsEndpoint = environment.medicalProviderBoardCertificationsEndpointPath;
  private proceduresEndpoint = environment.medicalProviderKeyProceduresEndpointPath;
  private http = inject(HttpClient);
  private boardAssembler = inject(BoardCertificationAssembler);
  private keyAssembler = inject(KeyProcedureAssembler);
  private specialtyAssembler = inject(SpecialtyAssembler);

  getBoardCertifications(): Observable<BoardCertification[]> {
    return this.http.get<BoardCertificationResponse>(`${this.baseUrl}${this.boardsEndpoint}`).pipe(
      map(response => this.boardAssembler.toEntitiesFromResponse(response))
    );
  }

  getKeyProcedures(): Observable<KeyProcedure[]> {
    return this.http.get<KeyProcedureResponse>(`${this.baseUrl}${this.proceduresEndpoint}`).pipe(
      map(response => this.keyAssembler.toEntitiesFromResponse(response))
    );
  }

  getSpecialtiesBySourceId(specialtyName: string): Observable<Specialty[]> {
    return this.http.get<TopHeadlinesResponse>(`${this.baseUrl}${this.medicalEndpoint}`, {
      params: { specialties: specialtyName }
    }).pipe(
      map(response => this.specialtyAssembler.toEntitiesFromResponse(response))
    );
  }
}
