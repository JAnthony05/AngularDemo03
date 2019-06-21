import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './compoments/header/header.component';
import { HeroesComponent } from './compoments/heroes/heroes.component';
import { HeroeComponent } from './compoments/heroe/heroe.component';
import { HeroetarjetaComponent } from './compoments/heroetarjeta/heroetarjeta.component';
import { SpotifyComponent } from './compoments/spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroeComponent,
    HeroetarjetaComponent,
    SpotifyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule { }
