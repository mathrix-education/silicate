import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBrickAnchorComponent } from './video-brick-anchor.component';

describe('VideoBrickAnchorComponent', () => {
  let component: VideoBrickAnchorComponent;
  let fixture: ComponentFixture<VideoBrickAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBrickAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBrickAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
