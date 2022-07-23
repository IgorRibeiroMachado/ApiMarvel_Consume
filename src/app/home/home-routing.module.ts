import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { SeriesComponent } from './series/series.component';
import { SeriesIdCharactersComponent } from './series-id-characters/series-id-characters.component';
import { SeriesIdComponent } from './series-id/series-id.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'seriesId', component: SeriesIdComponent },
  { path: 'seriesIdCharacters', component: SeriesIdCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class HomeRoutingModule {}

