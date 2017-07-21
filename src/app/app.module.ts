import { HeroDetailsComponent } from './hero/hero-details/hero-details.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroComponent } from './hero/hero/hero.component';
import { HeroModule } from './hero/hero.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HeroModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }



