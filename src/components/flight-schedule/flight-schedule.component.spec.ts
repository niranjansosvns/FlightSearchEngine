import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightScheduleComponent } from './flight-schedule.component';

describe('FlightScheduleComponent', () => {
  let component: FlightScheduleComponent;
  let fixture: ComponentFixture<FlightScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightScheduleComponent);
    component = fixture.componentInstance;
    component.queriedData = {
      originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a div component with class flightTimingInfo`, async(() => {
    const fixture = TestBed.createComponent(FlightScheduleComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.flightTimingInfo')).toBeTruthy();
  }));
});
