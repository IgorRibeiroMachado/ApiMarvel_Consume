import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersModule } from './characters/characters.module';
import { SeriesModule } from './series/series.module';
import { SeriesIdCharactersModule } from './series-id-characters/series-id-characters.module';
import { SeriesIdModule } from './series-id/series-id.module';
import { homeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CharactersModule,
    SeriesModule,
    SeriesIdModule,
    SeriesIdCharactersModule,
    homeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
