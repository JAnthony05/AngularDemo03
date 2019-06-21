import { SpotifyComponent } from './compoments/spotify/spotify.component';
import { HeroesComponent } from './compoments/heroes/heroes.component';
import { HeroeComponent } from './compoments/heroe/heroe.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HeroesComponent},
  {path: "detalle/:id" , component: HeroeComponent},
  {path: "spotify" , component: SpotifyComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
