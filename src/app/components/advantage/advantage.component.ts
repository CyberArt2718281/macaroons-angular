import { Component, Input, OnInit } from '@angular/core';
import { Advantage } from '../../interfaces/app.component.type';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss'],
})
export class AdvantageComponent {

  @Input() advantage: Advantage;
  @Input() index: number;
  constructor() {
    this.advantage = { title: '', text: '' };
    this.index = 0;
  }

  ngOnInit(): void {}
}
