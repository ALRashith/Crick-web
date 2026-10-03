import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuickNavItem {
  label: string;
  icon: 'chart' | 'trophy' | 'calendar';
  accent: 'blue' | 'green' | 'purple';
}

@Component({
  selector: 'app-quick-nav',
  standalone: true,
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

  select(item: QuickNavItem): void {
    this.selectedItem = item;
  }
}
