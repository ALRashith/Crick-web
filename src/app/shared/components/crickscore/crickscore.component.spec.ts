import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickscoreComponent } from './crickscore.component';

describe('CrickscoreComponent', () => {
  let component: CrickscoreComponent;
  let fixture: ComponentFixture<CrickscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrickscoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
