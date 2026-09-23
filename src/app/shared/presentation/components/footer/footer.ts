import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager, //Esto es nuevo
})
export class Footer {}
