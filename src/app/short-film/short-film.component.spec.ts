import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFilmComponent } from './short-film.component';

describe('ShortFilmComponent', () => {
  let component: ShortFilmComponent;
  let fixture: ComponentFixture<ShortFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
