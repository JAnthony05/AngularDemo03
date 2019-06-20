import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './compoments/header/header.component';
import { HeroesComponent } from './compoments/heroes/heroes.component';
import { HeroeComponent } from './compoments/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule { }
