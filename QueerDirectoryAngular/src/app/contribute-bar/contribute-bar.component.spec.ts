import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeBarComponent } from './contribute-bar.component';

describe('ContributeBarComponent', () => {
  let component: ContributeBarComponent;
  let fixture: ComponentFixture<ContributeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributeBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
