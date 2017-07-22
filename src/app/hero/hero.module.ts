import { HeroesService } from './heroes.service';
import { Hero } from './hero.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component'
import { HeroSearchService } from './hero-search.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    HeroComponent
  ],
  providers: [
    HeroesService,
    HeroSearchService
  ]
})
export class HeroModule { }
