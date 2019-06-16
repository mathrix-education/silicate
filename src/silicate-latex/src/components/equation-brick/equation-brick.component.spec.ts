import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EquationBrickComponent} from './equation-brick.component';

describe('EquationBrickComponent', () => {
  let component: EquationBrickComponent;
  let fixture: ComponentFixture<EquationBrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [EquationBrickComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
