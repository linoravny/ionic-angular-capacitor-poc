import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopItemModel } from './shop-item-model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit, OnDestroy {

  products: ShopItemModel[];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.products = this.shopService.getAllProducts();
    console.log(this.products);
  }

  ngOnDestroy() {
    console.log('ShopPage destroy!');
  }

}
