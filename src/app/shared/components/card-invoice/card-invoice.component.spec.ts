import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvoiceComponent } from './card-invoice.component';

describe('CardInvoiceComponent', () => {
  let component: CardInvoiceComponent;
  let fixture: ComponentFixture<CardInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
