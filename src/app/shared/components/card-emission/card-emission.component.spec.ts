import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmissionComponent } from './card-emission.component';

describe('CardEmissionComponent', () => {
  let component: CardEmissionComponent;
  let fixture: ComponentFixture<CardEmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
