import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SilicateToolbarComponent} from './silicate-toolbar.component';

describe('SilicateToolbarComponent', () => {
  let component: SilicateToolbarComponent;
  let fixture: ComponentFixture<SilicateToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilicateToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilicateToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
