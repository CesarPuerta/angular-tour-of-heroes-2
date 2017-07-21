import { HeroesService } from './heroes.service';
import { Hero } from './hero.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent],
  exports: [
    HeroComponent
  ],
  providers: [HeroesService]
})
export class HeroModule { }
