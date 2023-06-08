import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationChartComponent } from './organization-chart.component';

describe('OrganizationChartComponent', () => {
  let component: OrganizationChartComponent;
  let fixture: ComponentFixture<OrganizationChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationChartComponent]
    });
    fixture = TestBed.createComponent(OrganizationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
