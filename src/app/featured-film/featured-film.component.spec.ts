import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFilmComponent } from './featured-film.component';

describe('FeaturedFilmComponent', () => {
  let component: FeaturedFilmComponent;
  let fixture: ComponentFixture<FeaturedFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
