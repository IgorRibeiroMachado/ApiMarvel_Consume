import { ApiConsumeService } from './../services/api-consume.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  name = new FormControl();
  characters: any;
  qntCharacters = 0;
  characterName = this.name.value;

  offset = 0;
  pageSize = 0;
  currentPage = 0;

  constructor(private apiConsumeService: ApiConsumeService) { }

  ngOnInit(): void {
    this.apiConsumeService.getCharacters(this.offset, this.pageSize)
      .subscribe(valor => {
        this.characters = valor.data.results;
        this.qntCharacters = valor.data.total;
        this.pageSize = valor.data.limit;
      });
  }

  public consultandoCharacter() {
    this.offset = 0;

    if (this.name.value) {
      this.apiConsumeService.getCharactersByName(this.name.value)
        .subscribe(valor => {
          this.characters = valor.data.results;
          if (this.characters.length == 0)
            this.characters = null;
        });
    } else {
      this.apiConsumeService.getCharacters(this.offset, this.pageSize)
        .subscribe(valor => {
          this.characters = valor.data.results;
        });
    }
 }

 public onChangePage(page: PageEvent) {
  this.offset = page.pageIndex * page.pageSize;

  this.apiConsumeService.getCharacters(this.offset, this.pageSize)
    .subscribe(valor => {
      this.characters = valor.data.results;
    })
 }
}
