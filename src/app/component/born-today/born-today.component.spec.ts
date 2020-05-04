import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BornTodayComponent } from './born-today.component';

describe('BornTodayComponent', () => {
  let component: BornTodayComponent;
  let fixture: ComponentFixture<BornTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BornTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BornTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
