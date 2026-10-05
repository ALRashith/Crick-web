import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface QuickNavItem {
  label: string;
  icon: 'chart' | 'trophy' | 'calendar';
  accent: 'blue' | 'green' | 'purple';
}

@Component({
    selector: 'app-quick-nav',
    imports: [CommonModule],
    templateUrl: './quick-nav.component.html',
    styleUrl: './quick-nav.component.scss'
})
export class QuickNavComponent {
  readonly items: QuickNavItem[] = [
    { label: 'Live Score', icon: 'chart', accent: 'blue' },
    { label: 'Tournaments', icon: 'trophy', accent: 'green' },
    { label: 'Schedule', icon: 'calendar', accent: 'purple' }
  ];

  selectedItem = this.items[0];

  constructor(private readonly router: Router) {}

  select(item: QuickNavItem): void {
    this.selectedItem = item;

    if (item.label === 'Live Score') {
      void this.router.navigate(['/match-setup']);
    }
  }
}
