import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataComponent } from './input-data.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';

describe('InputDataComponent', () => {
  let component: InputDataComponent;
  let fixture: ComponentFixture<InputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputDataComponent],
      imports: [FormsModule, HttpModule],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a div component with class tab`, async(() => {
    const fixture = TestBed.createComponent(InputDataComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tab')).toBeTruthy();
  }));
  it(`should have a div component with id refine`, async(() => {
    const fixture = TestBed.createComponent(InputDataComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div#refine')).toBeTruthy();
  }));
  it(`should have a form component`, async(() => {
    const fixture = TestBed.createComponent(InputDataComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));

});