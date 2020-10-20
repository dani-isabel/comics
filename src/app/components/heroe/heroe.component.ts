import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../modules/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor( private activatedRouter:ActivatedRoute,
    private heroeService:HeroesService ) {
    this.activatedRouter.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
      console.log(this.heroe)
    })
   }

  ngOnInit(): void {
  }

}
