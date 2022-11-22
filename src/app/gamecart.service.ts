import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from 'src/app/game-table/Game';
@Injectable({
  providedIn: 'root',
})
export class GamecartService {
  private _cartList: Game[] = [];
  carList: BehaviorSubject<Game[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCar(game: Game) {
    //buscame un elemento v1 que el v1.name sea igual al beer.name
    let item = this._cartList.find((v1) => v1.name == game.name); //es un metodo para buscar elemento
    if (!item) {
      this._cartList.push({ ...game }); //los 3 puntos indican que hace una copia del objeto y hace un push de esa copia
    } else {
      item.quantity += game.quantity; //le voy sumando la cantidad
    }
    console.log(this.carList);
    this.carList.next(this._cartList); //equivalente al emmit d eventos
  }
}
