import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiConsumeService } from '../services/api-consume.service';

@Component({
  selector: 'app-series-id',
  templateUrl: './series-id.component.html',
  styleUrls: ['./series-id.component.scss']
})
export class SeriesIdComponent {

  id = new FormControl();
  series: any;
  public seriesId = this.id.value;

  constructor(private apiConsumeService: ApiConsumeService) { }

  consultandoSeriesPorId() {
    this.apiConsumeService.getSeriesById(this.id.value).subscribe((valor) => {
      this.series = valor.data.results;
      if (this.series.length == 0)
            this.series = null;
    });
  }
}
