import { HomeComponent } from './home.component';
import { SeriesIdCharactersComponent } from './series-id-characters/series-id-characters.component';
import { SeriesIdComponent } from './series-id/series-id.component';
import { SeriesComponent } from './series/series.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: CharactersComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'series', component: SeriesComponent },
      { path: 'seriesId', component: SeriesIdComponent },
      { path: 'seriesIdCharacters', component: SeriesIdCharactersComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class homeRoutingModule {}


