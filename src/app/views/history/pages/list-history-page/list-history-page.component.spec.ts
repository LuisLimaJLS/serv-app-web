import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoryPageComponent } from './list-history-page.component';

describe('ListHistoryPageComponent', () => {
  let component: ListHistoryPageComponent;
  let fixture: ComponentFixture<ListHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHistoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
