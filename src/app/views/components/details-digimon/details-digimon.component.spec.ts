import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDigimonComponent } from './details-digimon.component';

describe('DetailsDigimonComponent', () => {
  let component: DetailsDigimonComponent;
  let fixture: ComponentFixture<DetailsDigimonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsDigimonComponent]
    });
    fixture = TestBed.createComponent(DetailsDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
