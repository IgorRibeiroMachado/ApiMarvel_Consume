import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesIdCharactersComponent } from './series-id-characters.component';

describe('SeriesIdCharactersComponent', () => {
  let component: SeriesIdCharactersComponent;
  let fixture: ComponentFixture<SeriesIdCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesIdCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesIdCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
