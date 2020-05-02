import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMoviesComponent } from './add-new-movies.component';

describe('AddNewMoviesComponent', () => {
  let component: AddNewMoviesComponent;
  let fixture: ComponentFixture<AddNewMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
