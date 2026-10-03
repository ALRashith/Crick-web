import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-standalone',
  standalone: true,
  imports: [],
  templateUrl: './angular-standalone.component.html',
  styleUrl: './angular-standalone.component.scss'
})
export class AngularStandaloneComponent {
  readonly benefits = [
    'Dependencies are visible next to the component that uses them.',
    'There is less NgModule boilerplate and less configuration to maintain.',
    'Lazy loading and testing are simpler because components are self-contained.'
  ];
}
