export class Specialty {
  constructor(
    public specialtyName: string,
    public yearsOfResidency: number,
    public averageSalaryUsd: number,
    public mainFocus: string[],
    public hospitalDepartment: string,
    public patientPopulation: string,
    public boardCertification: string,
    public keyProcedures: string,
  ) {
  }
}
