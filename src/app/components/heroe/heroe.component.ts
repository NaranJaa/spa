import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(private activateRouter: ActivatedRoute,
                private _HeroesService: HeroesService,
                private router: Router) { 
    
    this.activateRouter.params.subscribe(params => { 
      this.heroe = this._HeroesService.getHeroe(params['id']);
    });
  }

  regresarHome(idx: number) {
    this.router.navigate(['heroe', idx]);
  }

  ngOnInit() {
  }
}
