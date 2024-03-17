import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGenericComponent } from './section-generic.component';
import { CommonModule } from '@angular/common';
import { CardServiceComponent } from '../card-service/card-service.component';

describe('SectionGenericComponent', () => {
  let component: SectionGenericComponent;
  let fixture: ComponentFixture<SectionGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGenericComponent, CommonModule, CardServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
