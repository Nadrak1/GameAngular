import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../game-table/Game';
import { GamecartService } from '../gamecart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  game: Game[] = [];
  title = '🛒​🛒​🛒​🛒​🛒​';
  cartList$!: Observable<Game[]>;
  constructor(private cart: GamecartService) {
    this.cartList$ = cart.carList.asObservable();
  }

  ngOnit(): void {}

  total() {
    let sum = 0;
    this.cartList$.forEach((e) => {
      e.forEach((element) => {
        sum += element.price * element.quantity;
      });
    });
    return sum;
  }
}
