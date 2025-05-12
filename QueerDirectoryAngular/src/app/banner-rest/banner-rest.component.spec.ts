import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRestComponent } from './banner-rest.component';

describe('BannerRestComponent', () => {
  let component: BannerRestComponent;
  let fixture: ComponentFixture<BannerRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerRestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
