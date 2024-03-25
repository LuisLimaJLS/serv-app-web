import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValuesPageComponent } from './list-values-page.component';

describe('ListValuesPageComponent', () => {
  let component: ListValuesPageComponent;
  let fixture: ComponentFixture<ListValuesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListValuesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListValuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
