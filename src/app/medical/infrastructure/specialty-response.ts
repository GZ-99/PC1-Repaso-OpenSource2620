export interface SpecialtyResponse {
  specialties: SpecialtyResource[];
}

export interface SpecialtyResource {
  specialtyName:      string;
  yearsOfResidency:   number;
  averageSalaryUsd:   number;
  mainFocus:          string[];
  hospitalDepartment: string;
  patientPopulation:  string;
  boardCertification: { bodyName: string; examFrequencyYears: number; certificationCostUsd: number };
  keyProcedures:      KeyProcedureResource[];
}

export interface KeyProcedureResource {
  procedureName: string;
  averageCost:   number;
  complexity:    string;
}
