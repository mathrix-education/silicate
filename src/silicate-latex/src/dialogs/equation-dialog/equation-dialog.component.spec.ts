import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationDialogComponent } from './equation-dialog.component';

describe('EquationDialogComponent', () => {
  let component: EquationDialogComponent;
  let fixture: ComponentFixture<EquationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
