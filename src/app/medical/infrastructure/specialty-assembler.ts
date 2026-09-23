import { inject, Service } from '@angular/core';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {SpecialtyResource, TopHeadlinesResponse} from './top-headlines-response';
import {Specialty} from '../domain/model/specialty.entity';
import {BoardCertification} from '../domain/model/board-certification.entity';

@Service()
export class SpecialtyAssembler {
  private logoApi = inject(LogoDevApi);

  toEntityFromResource(resource: SpecialtyResource): Specialty {
    let specialty = new Specialty();
    specialty.specialtyName = resource.specialtyName || '';
    specialty.yearsOfResidency = resource.yearsOfResidency || 0;
    specialty.averageSalaryUsd = resource.averageSalaryUsd || 0;
    specialty.mainFocus = [...(resource.mainFocus ?? [])];
    specialty.hospitalDepartment = resource.hospitalDepartment || '';
    specialty.patientPopulation = resource.patientPopulation || '';
    specialty.boardCertification = new BoardCertification();
    specialty.boardCertification.bodyName = resource.boardCertification.bodyName || '';
    specialty.boardCertification.examFrequencyYears = resource.boardCertification.examFrequencyYears || 0;
    specialty.boardCertification.certificationCostUsd = resource.boardCertification.certificationCostUsd || 0;
    specialty.keyProcedures = (resource.keyProcedures ?? []).map((kp) => ({
      procedureName: kp.procedureName || '',
      averageCost: kp.averageCost || 0,
      complexity: kp.complexity || ''
    }));
    return specialty;
  }

  toEntitiesFromResponse(response: TopHeadlinesResponse): Specialty[] {
    return response.specialties.map(specialty => this.toEntityFromResource(specialty));
  }
}
