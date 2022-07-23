import { SeriesComponent } from './series.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [SeriesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MaterialModule
  ],
  exports: [SeriesComponent]
})
export class SeriesModule { }
