import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import dependent components
import { FilterDetailsComponent } from './filter-details.component';
import { FlightScheduleComponent } from '../flight-schedule/flight-schedule.component';

describe('FilterDetailsComponent', () => {
  let component: FilterDetailsComponent;
  let fixture: ComponentFixture<FilterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterDetailsComponent, FlightScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDetailsComponent);
    component = fixture.componentInstance;
    component.searchResults = {
      bookingInfo: {
        originCity: '', destinationCity: '', oneway: true, refine: 10000, departureDate: '', returnDate: '', passengers: 1
      },
      oneway: true, oneWayFlights: [], returningFlights: []
    }
    component.bookingIcons = `./assets/img/aero.jpg`;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a info-box component`, async(() => {
    const fixture = TestBed.createComponent(FilterDetailsComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('info-box')).toBeDefined();
  }));
});
