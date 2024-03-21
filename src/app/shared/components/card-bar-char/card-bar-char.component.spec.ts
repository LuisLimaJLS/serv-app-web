import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarCharComponent } from './card-bar-char.component';

describe('CardBarCharComponent', () => {
  let component: CardBarCharComponent;
  let fixture: ComponentFixture<CardBarCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBarCharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBarCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
