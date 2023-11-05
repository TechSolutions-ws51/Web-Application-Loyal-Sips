import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubsComponent } from './pubs.component';

describe('PubsComponent', () => {
  let component: PubsComponent;
  let fixture: ComponentFixture<PubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubsComponent]
    });
    fixture = TestBed.createComponent(PubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
