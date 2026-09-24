import { Service } from '@angular/core';
import {SpecialtyResource} from './specialty-response';
import {Specialty} from '../domain/model/specialty.entity';

@Service()
export class SpecialtyAssembler {
  toEntity(specialtyResource: SpecialtyResource): Specialty {
    return new Specialty(
      specialtyResource.specialtyName,
      specialtyResource.yearsOfResidency,
      specialtyResource.averageSalaryUsd,
      specialtyResource.mainFocus,
      specialtyResource.hospitalDepartment,
      specialtyResource.patientPopulation,
      specialtyResource.boardCertification.bodyName,
      specialtyResource.keyProcedures.map(procedure => procedure.procedureName)
        .join(', ')
    );
  }

  toEntities(specialtyResources: SpecialtyResource[]): Specialty[] {
    return specialtyResources.map((specialtyResource) => this.toEntity(specialtyResource));
  }
}
