import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativePlayerComponent } from './native-player.component';

describe('NativePlayerComponent', () => {
  let component: NativePlayerComponent;
  let fixture: ComponentFixture<NativePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
