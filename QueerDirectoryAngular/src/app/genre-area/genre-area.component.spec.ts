import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreAreaComponent } from './genre-area.component';

describe('GenreAreaComponent', () => {
  let component: GenreAreaComponent;
  let fixture: ComponentFixture<GenreAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
