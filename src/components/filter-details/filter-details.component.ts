import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SearchResponse } from '../../models/search-response';

@Component({
  selector: 'filter-details',
  templateUrl: './filter-details.component.html',
  styleUrls: ['./filter-details.component.css']
})
export class FilterDetailsComponent implements OnInit {

  @Input() searchResults: SearchResponse;
  @Output() fly = new EventEmitter<boolean>();


  //page variables
  bookingIcons: string;
  constructor() {
    this.bookingIcons = `./assets/img/aero.jpg`
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.searchResults);
  }

  /**
   * Click handler for book button
   * @param e 
   * @param index 
   */
  public bookThisFlight(e: any, index: number) {
    console.log(e, index);
    this.fly.emit(true);
  }
}
