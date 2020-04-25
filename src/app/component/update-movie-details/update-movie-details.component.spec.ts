import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieDetailsComponent } from './update-movie-details.component';

describe('UpdateMovieDetailsComponent', () => {
  let component: UpdateMovieDetailsComponent;
  let fixture: ComponentFixture<UpdateMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
