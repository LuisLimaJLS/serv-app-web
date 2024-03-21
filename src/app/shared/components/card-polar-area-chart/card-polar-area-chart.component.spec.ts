import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPolarAreaChartComponent } from './card-polar-area-chart.component';

describe('CardPolarAreaChartComponent', () => {
  let component: CardPolarAreaChartComponent;
  let fixture: ComponentFixture<CardPolarAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPolarAreaChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
