import {BoardCertificationResource} from './board-certification-response';
import {KeyProcedureResource} from './key-procedure-response';

export interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  specialties: SpecialtyResource[];
}

export interface SpecialtyResource {
  specialtyName: string | null;
  yearsOfResidency: number;
  averageSalaryUsd: number;
  mainFocus: string[];
  hospitalDepartment: string | null;
  patientPopulation: string | null;
  boardCertification: BoardCertificationResource;
  keyProcedures: KeyProcedureResource[];
}
