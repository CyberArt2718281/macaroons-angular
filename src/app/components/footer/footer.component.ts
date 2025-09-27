import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../app.component.adaptive.scss'],
})
export class FooterComponent implements OnInit {
  @Input() numberPhone: string = '';


  constructor() {
  
  }

  ngOnInit(): void {}
}
