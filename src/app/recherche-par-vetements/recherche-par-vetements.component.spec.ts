import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParVetementsComponent } from './recherche-par-vetements.component';

describe('RechercheParVetementsComponent', () => {
  let component: RechercheParVetementsComponent;
  let fixture: ComponentFixture<RechercheParVetementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParVetementsComponent]
    });
    fixture = TestBed.createComponent(RechercheParVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
