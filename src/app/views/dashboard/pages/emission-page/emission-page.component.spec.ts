import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionPageComponent } from './emission-page.component';

describe('EmissionPageComponent', () => {
  let component: EmissionPageComponent;
  let fixture: ComponentFixture<EmissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
