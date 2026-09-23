import {inject, Service} from '@angular/core';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {KeyProcedure} from '../domain/model/key-procedure.entity';
import {KeyProcedureResource, KeyProcedureResponse} from './key-procedure-response';

@Service()
export class KeyProcedureAssembler {
  private logoApi = inject(LogoDevApi);

  toEntityFromResource(resource: KeyProcedureResource): KeyProcedure {
    let key = new KeyProcedure();
    key.procedureName = resource.procedureName || '';
    key.averageCost = resource.averageCost || 0;
    key.complexity = resource.complexity || '';
    return key;
  }

  toEntitiesFromResponse(response: KeyProcedureResponse): KeyProcedure[] {
    return response.boards.map(key => this.toEntityFromResource(key));
  }
}
