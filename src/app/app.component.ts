import { Component } from '@angular/core';
import { Advantage, Macaroons } from './interfaces/app.component.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formValues = {
    macaroonTitle: '',
    name: '',
    phone: '',
  };
  public showPresent = false;
  public clickGif(){
    this.showPresent = !this.showPresent;
  }
  public macaroonsItems: Macaroons[] = [
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
  public advantagesItems: Advantage[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];
  public trackByAdvantage(index: number ):  number {
    return  index;
  }
  public trackByMacaroons(index: number):  number{
    return  index;
  }

  public clickScrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  public addMacaroons(macaroonTitle:string, order:HTMLElement){
    this.formValues.macaroonTitle = macaroonTitle.toUpperCase();
    this.clickScrollTo(order)
  }
  public CreateOrder()
  {
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
