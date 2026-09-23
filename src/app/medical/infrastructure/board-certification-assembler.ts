import { inject, Service } from '@angular/core';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {BoardCertification} from '../domain/model/board-certification.entity';
import {BoardCertificationResource, BoardCertificationResponse} from './board-certification-response';

@Service()
export class BoardCertificationAssembler {
  private logoApi = inject(LogoDevApi);

  toEntityFromResource(resource: BoardCertificationResource): BoardCertification {
    let board = new BoardCertification();
    board.bodyName = resource.bodyName || '';
    board.examFrequencyYears = resource.examFrequencyYears || 0;
    board.certificationCostUsd = resource.certificationCostUsd || 0;
    return board;
  }

  toEntitiesFromResponse(response: BoardCertificationResponse): BoardCertification[] {
    return response.boards.map(board => this.toEntityFromResource(board));
  }
}
