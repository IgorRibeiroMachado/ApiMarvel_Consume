import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesIdComponent } from './series-id.component';

describe('SeriesIdComponent', () => {
  let component: SeriesIdComponent;
  let fixture: ComponentFixture<SeriesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
