import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUVComponent } from './suv.component';

describe('SUVComponent', () => {
  let component: SUVComponent;
  let fixture: ComponentFixture<SUVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SUVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
