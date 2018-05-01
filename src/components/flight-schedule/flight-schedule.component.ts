import { Component, OnInit, Input } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';

@Component({
  selector: 'flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {

  @Input() queriedData: BookingInformation;

  constructor() { }

  ngOnInit() {
    
  }

}
