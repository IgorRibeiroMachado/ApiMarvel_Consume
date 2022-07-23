import { SeriesIdModule } from './series-id/series-id.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersModule } from './characters/characters.module';
import { HomeRoutingModule } from './home-routing.module';
import { SeriesModule } from './series/series.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
    SeriesModule,
    SeriesIdModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
