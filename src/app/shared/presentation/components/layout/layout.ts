import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { MedicalPage } from '../../../../medical/presentation/medical-page/medical-page/medical-page';
import { Footer } from '../footer/footer';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  imports: [
    Toolbar,
    MedicalPage,
    MedicalPage,
    Footer,
    LanguageSwitcher
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
