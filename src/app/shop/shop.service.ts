import { Injectable } from '@angular/core';
import { ShopItemModel } from './shop-item-model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopProducts: ShopItemModel[] = [
    {
      id: 'r1',
      title: 'cotton midi dress',
      imageUrl:
        'https://assets.superbalistcdn.co.za/filters:quality(75):format(jpg)/1968778/original.jpg',
      price: '88$'
    },
    {
      id: 'r2',
      title: 'Madison Square Grey Polly Pleated Crop',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0505/7117/products/IMG_0623_1024x1024.JPG?v=1428469450',
        price: '110$'
    }
  ];

  constructor() {}

  getAllProducts() {
    return [...this.shopProducts];
  }

  getProduct(productId: string) {
    return {
      ...this.shopProducts.find(product => {
        return product.id === productId;
      })
    };
  }

  deleteProduct(productId: string) {
    this.shopProducts = this.shopProducts.filter(product => {
      return product.id !== productId;
    });
  }

}
