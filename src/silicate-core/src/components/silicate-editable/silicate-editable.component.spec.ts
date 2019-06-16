import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SilicateEditableComponent} from './silicate-editable.component';

describe('RichTextComponent', () => {
  let component: SilicateEditableComponent;
  let fixture: ComponentFixture<SilicateEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SilicateEditableComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilicateEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
