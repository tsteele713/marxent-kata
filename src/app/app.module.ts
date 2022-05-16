import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { SpaceshipService } from './services/spaceship.service';

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SpaceshipService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
