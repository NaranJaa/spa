import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  
  heroe:any = {};
  constructor(private activateRouter: ActivatedRoute,
              private _HeroesService: HeroesService,
              private router:Router) { 

    this.activateRouter.params.subscribe( params => {
      this.heroe = this._HeroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  regresarHome(idx:number) {
    this.router.navigate(['heroeDetalle',idx]);
  }
  ngOnInit() {

  }

}
