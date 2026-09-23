import {BoardCertification} from './board-certification.entity';
import {KeyProcedure} from './key-procedure.entity';

export class Specialty {
  specialtyName:      string;
  yearsOfResidency:   number;
  averageSalaryUsd:   number;
  mainFocus:          string[];
  hospitalDepartment: string;
  patientPopulation:  string;
  boardCertification: BoardCertification;
  keyProcedures:      KeyProcedure[];

  constructor() {
    this.specialtyName =  '';
    this.yearsOfResidency = 0;
    this.averageSalaryUsd = 0;
    this.mainFocus = [];
    this.hospitalDepartment = '';
    this.patientPopulation = '';
    this.boardCertification = new BoardCertification();
    this.keyProcedures = [];
  }

  public updateBoardCertificationInformation = (board: BoardCertification): void => {
    this.boardCertification.bodyName = board.bodyName;
    this.boardCertification.examFrequencyYears = board.examFrequencyYears;
    this.boardCertification.certificationCostUsd = board.certificationCostUsd;
  }

  public updateKeyProcedureInformation = (key: KeyProcedure[]): void => {
    this.keyProcedures = key.map((procedure) => ({
      ...procedure,
      procedureName: procedure.procedureName,
      averageCost: procedure.averageCost,
      complexity: procedure.complexity
    }));
  }
}
