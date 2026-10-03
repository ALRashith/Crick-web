import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { QuickNavComponent } from '../../shared/components/quick-nav/quick-nav.component';
import { CrickscoreComponent } from '../../shared/components/crickscore/crickscore.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, QuickNavComponent, HeroComponent, CrickscoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}