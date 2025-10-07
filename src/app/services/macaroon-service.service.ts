import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MacaroonServiceService {
  count:number = 0;
  sum:number = 0;
  constructor() {}
  getMacaroons() {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        counts: 3,
        price: 170,
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        counts: 5,
        price: 120,
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        counts: 10,
        price: 150,
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        counts: 15,
        price: 300,
      },
    ];
  }

  addPriceToCart(price:number){
    this.sum += price;
  }
  getPrice(){
    return this.sum + ' руб.'
  }
}
