import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDigimonComponent } from './grid-digimon.component';

describe('GridDigimonComponent', () => {
  let component: GridDigimonComponent;
  let fixture: ComponentFixture<GridDigimonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDigimonComponent]
    });
    fixture = TestBed.createComponent(GridDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
