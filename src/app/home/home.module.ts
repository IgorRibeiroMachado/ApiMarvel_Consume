import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersModule } from './characters/characters.module';
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
