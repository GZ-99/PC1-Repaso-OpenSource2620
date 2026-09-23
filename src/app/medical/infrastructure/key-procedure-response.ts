export interface KeyProcedureResponse {
  status: string;
  boards: KeyProcedureResource[];
}

export interface KeyProcedureResource {
  procedureName: string | null;
  averageCost: number;
  complexity: string | null;
}
