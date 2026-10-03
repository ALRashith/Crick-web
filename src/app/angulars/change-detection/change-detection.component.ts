import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {
  defaultCount = 0;
  onPushCount = 0;
  manualCount = 0;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  incrementDefault(): void {
    this.defaultCount++;
  }

  incrementOnPush(): void {
    this.onPushCount++;
  }

  incrementManual(): void {
    this.manualCount++;
    this.changeDetectorRef.detectChanges();
  }
}

@Component({
  selector: 'app-change-detection-on-push-sample',
  standalone: true,
  template: '<p>OnPush sample component</p>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnPushSampleComponent {}
