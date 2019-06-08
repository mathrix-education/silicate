import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBrickComponent } from './video-brick.component';

describe('VideoBrickComponent', () => {
  let component: VideoBrickComponent;
  let fixture: ComponentFixture<VideoBrickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBrickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
