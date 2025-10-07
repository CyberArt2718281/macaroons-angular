import { Component, OnInit } from '@angular/core';
import { MacaroonServiceService } from '../../services/macaroon-service.service';

@Component({
  selector: 'app-gift-box',
  templateUrl: './gift-box.component.html',
  styleUrls: ['./gift-box.component.scss']
})
export class GiftBoxComponent implements OnInit {
  showPresent:boolean=false;
  constructor(public macaroonServiceService:MacaroonServiceService) { }

  ngOnInit(): void {
  }
  
}
