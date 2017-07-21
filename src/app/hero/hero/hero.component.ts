import { HeroesService } from './../heroes.service';
import { Hero, HEROES } from './../hero.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private HeroesService: HeroesService
  ) { }

  ngOnInit() {
      this.HeroesService.getHeroes().then((heroes) => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
