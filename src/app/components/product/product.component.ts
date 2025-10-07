import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Macaroons } from '../../interfaces/app.component.type';
import { MacaroonServiceService } from '../../services/macaroon-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() macaroon: Macaroons;
  @Input() index: number;
  @Output() addProductEvent = new EventEmitter<Macaroons>();
  constructor(private macaroonServiceService: MacaroonServiceService) {
    this.macaroon = {
      image: '',
      title: '',
      counts: 0,
      price: 0,
    };
    this.index = 0;
  }

  addMacaroons(macaroon: Macaroons) {
    this.macaroonServiceService.count++;
    this.macaroonServiceService.addPriceToCart(this.macaroon.price);
    this.addProductEvent.emit(macaroon);
  }
}
