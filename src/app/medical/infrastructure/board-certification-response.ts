export interface BoardCertificationResponse {
  status: string;
  boards: BoardCertificationResource[];
}

export interface BoardCertificationResource {
  bodyName: string | null;
  examFrequencyYears: number;
  certificationCostUsd: number;
}
