import { Component, Input, OnInit } from '@angular/core';
import { ShopItemModel } from '../shop-item-model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {

  @Input() productItem: ShopItemModel;

  constructor() { }

  ngOnInit() {
  }

}
