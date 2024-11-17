import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVetementsComponent } from './update-vetements.component';

describe('UpdateVetementsComponent', () => {
  let component: UpdateVetementsComponent;
  let fixture: ComponentFixture<UpdateVetementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVetementsComponent]
    });
    fixture = TestBed.createComponent(UpdateVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
