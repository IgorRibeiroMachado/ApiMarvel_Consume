import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ApiConsumeService } from '../services/api-consume.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})

export class SeriesComponent implements OnInit {

  title = new FormControl();
  series: any;
  qntSeries: any;

  offset = 0;
  pageSize = 0;
  currentPage = 0;

  public seriesTitle = this.title.value;

  constructor(private apiConsumeService: ApiConsumeService) { }

  ngOnInit(): void {
    this.apiConsumeService.getSeries(this.offset, this.pageSize).subscribe(valor => {
      this.series = valor.data.results;
      this.qntSeries = valor.data.total;
      this.pageSize = valor.data.limit;
    })
  }

  public consultandoSeries() {

    this.offset = 0;

    if (this.title.value) {
      this.apiConsumeService.getSeriesByTitle(this.title.value).subscribe((valor) => {
        this.series = valor.data.results;
        if (this.series.length == 0)
            this.series = null;
      })
    } else {
      this.apiConsumeService.getSeries(this.offset, this.pageSize).subscribe((valor) => {
        this.series = valor.data.results;
      })
    }
  }

  public onChangePage(page: PageEvent) {
    this.offset = page.pageIndex * page.pageSize;

    this.apiConsumeService.getSeries(this.offset, this.pageSize).subscribe(valor => {
      this.series = valor.data.results;
    })
  }
}
