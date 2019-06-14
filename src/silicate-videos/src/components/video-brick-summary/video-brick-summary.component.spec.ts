import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBrickSummaryComponent } from './video-brick-summary.component';

describe('VideoBrickSummaryComponent', () => {
  let component: VideoBrickSummaryComponent;
  let fixture: ComponentFixture<VideoBrickSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBrickSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrickSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
