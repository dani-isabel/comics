import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../modules/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( 
    private heroesService:HeroesService,
    private router:Router ) {
   }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe( index:number ) {
    this.router.navigate(['/heroe', index]);
  }
}
