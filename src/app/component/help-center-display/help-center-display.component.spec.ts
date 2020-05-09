import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterDisplayComponent } from './help-center-display.component';

describe('HelpCenterDisplayComponent', () => {
  let component: HelpCenterDisplayComponent;
  let fixture: ComponentFixture<HelpCenterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
