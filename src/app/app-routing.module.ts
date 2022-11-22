import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCreatorComponent } from './about-creator/about-creator.component';
import { GameTableComponent } from './game-table/game-table.component';
import { GameComponent } from './game/game.component';
const routes: Routes = [
  {
    path: '', //cuando esta vacio..
    redirectTo: 'games', //Nos redirige en caso de estar vacio
    pathMatch: 'full', //indica  la cantidad de URL que debe coincidir.Establecer esta propiedad en full,se recomienda cuando tienes un path vacío para una ruta.
  },
  {
    path: 'games',
    component: GameComponent,
  },
  {
    path: 'about',
    component: AboutCreatorComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
