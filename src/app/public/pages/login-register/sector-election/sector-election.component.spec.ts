import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorElectionComponent } from './sector-election.component';

describe('SectorElectionComponent', () => {
  let component: SectorElectionComponent;
  let fixture: ComponentFixture<SectorElectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorElectionComponent]
    });
    fixture = TestBed.createComponent(SectorElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
