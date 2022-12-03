import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameTableComponent } from './game-table/game-table.component';
import { AboutCreatorComponent } from './about-creator/about-creator.component';
import { GameComponent } from './game/game.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GameTableComponent,
    AboutCreatorComponent,
    GameComponent,
    InputIntegerComponent,
    ShoppingCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
