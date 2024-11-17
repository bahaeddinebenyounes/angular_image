import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVetementsComponent } from './add-vetements.component';

describe('AddVetementsComponent', () => {
  let component: AddVetementsComponent;
  let fixture: ComponentFixture<AddVetementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVetementsComponent]
    });
    fixture = TestBed.createComponent(AddVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
