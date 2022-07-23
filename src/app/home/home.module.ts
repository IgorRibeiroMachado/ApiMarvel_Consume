import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersModule } from './characters/characters.module';
import { HomeRoutingModule } from './home-routing.module';
import { SeriesModule } from './series/series.module';
import { SeriesIdCharactersModule } from './series-id-characters/series-id-characters.module';
import { SeriesIdModule } from './series-id/series-id.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    SeriesModule,
    SeriesIdModule,
    SeriesIdCharactersModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
