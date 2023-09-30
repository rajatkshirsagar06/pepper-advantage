import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaInputComponent } from './pa-input.component';

describe('PaInputComponent', () => {
  let component: PaInputComponent;
  let fixture: ComponentFixture<PaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
