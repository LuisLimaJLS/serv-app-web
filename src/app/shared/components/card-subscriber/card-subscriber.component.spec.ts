import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubscriberComponent } from './card-subscriber.component';

describe('CardSubscriberComponent', () => {
  let component: CardSubscriberComponent;
  let fixture: ComponentFixture<CardSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubscriberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
