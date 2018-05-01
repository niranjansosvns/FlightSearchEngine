import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//bas Application
import { AppComponent } from './app.component';

//components
import { InputDataComponent } from '../components/input-data/input-data.component';
import { FlightScheduleComponent } from '../components/flight-schedule/flight-schedule.component';
import { FilterDetailsComponent } from '../components/filter-details/filter-details.component';

//services
import { flightSearchService } from '../services/search.service';

export function providers() {
  return [flightSearchService];
}

export function imports() {
  return [
    BrowserModule,
    FormsModule,
    HttpModule
  ];
}

export function declarations() {
  return [
    AppComponent,
    InputDataComponent,
    FlightScheduleComponent,
    FilterDetailsComponent
  ];
}

@NgModule({
  declarations: declarations(),
  imports: imports(),
  providers: providers(),
  bootstrap: [AppComponent]
})
export class AppModule { }
