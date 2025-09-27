import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.adaptive.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() numberPhone: string = '';
  constructor() {}

  ngOnInit(): void {}
}
