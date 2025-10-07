import { Component } from '@angular/core';
import { Advantage, Macaroons } from './interfaces/app.component.type';
import { MacaroonServiceService } from './services/macaroon-service.service';
import { AdvantageServiceService } from './services/advantage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numberPhone = '375293689868';
  public formValues = {
    macaroonTitle: '',
    name: '',
    phone: '',
  };
  public advantagesItems: Advantage[];
  public macaroonsItems: Macaroons[];
  constructor(
    private macaroonServiceService: MacaroonServiceService,
    private advantageServiceService: AdvantageServiceService
  ) {
    this.macaroonsItems = this.macaroonServiceService.getMacaroons();
    this.advantagesItems = this.advantageServiceService.getAdvantages();
  }

  public trackByAdvantage(index: number): number {
    return index;
  }
  public trackByMacaroons(index: number): number {
    return index;
  }

  public clickScrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  public addMacaroons(macaroon: Macaroons, order: HTMLElement) {
    alert(`${macaroon.title} добавлен в корзину!`)
    this.formValues.macaroonTitle = macaroon.title.toUpperCase();
    this.clickScrollTo(order);
  }
  public CreateOrder() {
    if (!this.formValues.macaroonTitle) {
      alert('Введите название');
      return;
    }

    if (!this.formValues.name) {
      alert('Введите имя');
      return;
    }

    if (!this.formValues.phone.match(/^[а-яА-Я0-9,\.\s]+$/)) {
      alert('Введите телефон');
      return;
    }
    alert('Спасибо за заказ! Скоро мы с вами свяжемся!');
    this.formValues = {
      macaroonTitle: '',
      name: '',
      phone: '',
    };
  }
}
