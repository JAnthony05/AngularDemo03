import { Router } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes: any[]=[];
  constructor(  
    private heroeService: HeroeService,
    private router: Router
    ) {  }

  ngOnInit() {
    this.getHeroes();
  }
getHeroes(){
  
  this.heroes = this.heroeService.GetHeroes();
  console.log(this.heroes);
}
verdetalle(id){
  console.log(id);
this.router.navigate(["/detalle/"+id]);
}
}
