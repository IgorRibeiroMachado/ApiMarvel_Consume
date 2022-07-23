import { ApiConsumeService } from './../services/api-consume.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-series-id-characters',
  templateUrl: './series-id-characters.component.html',
  styleUrls: ['./series-id-characters.component.scss']
})
export class SeriesIdCharactersComponent {

  id = new FormControl();
  characterName = new FormControl();

  series: any;

  constructor(private apiConsumeService: ApiConsumeService) { }

  consultandoSeriesPorIdECharacter() {
    if (this.characterName.value && this.id.value) {
      console.log("1: " + this.id.value);
      this.apiConsumeService.getSeriesByIdCharacterName(this.id.value, this.characterName.value)
        .subscribe((valor) => {
          this.series = valor.data.results;
          if (this.series.length == 0)
            this.series = null;
        })
      } else if (this.id.value) {
        this.apiConsumeService.getSeriesByIdCharacter(this.id.value)
        .subscribe((valor) => {
          this.series = valor.data.results;
          if (this.series.length == 0)
            this.series = null;

        })
      }
  }
}
