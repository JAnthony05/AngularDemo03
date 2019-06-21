import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent implements OnInit {
    @Input() heroe: any;

  constructor() { }

  ngOnInit() {
  }

}
