import { Component } from '@angular/core';
import { GamecartService } from '../gamecart.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
})
export class GameTableComponent {
  constructor(private cart: GamecartService) {}

  games: Game[] = [
    {
      name: 'Far Cry 3',
      type: 'Shooter',
      price: 300,
      stock: 23,
      image: 'assets/img/farcry.jpg',
      clearance: 150,
      quantity: 2,
    },
    {
      name: 'FIFA 22',
      type: 'Sport',
      price: 7855,
      stock: 5,
      image: 'assets/img/fifa22.jpeg',
      clearance: 150,
      quantity: 2,
    },
    {
      name: 'NBA 2K23',
      type: 'Sport',
      price: 7000,
      stock: 5,
      image: 'assets/img/nba2k23.jpg',
      clearance: 150,
      quantity: 2,
    },
    {
      name: 'Call of Duty',
      type: 'Shooter',
      price: 2345,
      stock: 0,
      image: 'assets/img/blackops.jpg',
      clearance: 0,
      quantity: 0,
    },
    {
      name: 'Five Nights at Freddy s',
      type: 'Horror',
      price: 990.56,
      stock: 0,
      image: 'assets/img/patagonia.jpeg',
      clearance: 0,
      quantity: 0,
    },
    {
      name: 'League of Legends',
      type: 'Estrategy',
      price: 800,
      stock: 0,
      image: 'assets/img/patagonia.jpeg',
      clearance: 0,
      quantity: 0,
    },
    {
      name: 'Brawl Stars',
      type: 'Horror',
      price: 0,
      stock: 1,
      image: 'assets/img/patagonia.jpeg',
      clearance: 0,
      quantity: 1,
    },
  ];

  //EL : void dice el tipo q va a devolver
  addToCar(game: Game): void {
    this.cart.addToCar(game);
    game.stock -= game.quantity;
    game.quantity = 0; //lo reinicia a 0 para la siguiente compra
  }

  maxReached(m: string) {
    alert(m);
  }
}
