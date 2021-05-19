import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShopItemModel } from '../shop-item-model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-item-details',
  templateUrl: './shop-item-details.page.html',
  styleUrls: ['./shop-item-details.page.scss'],
})
export class ShopItemDetailsPage implements OnInit {

  loadedProduct: ShopItemModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) {
        // redirect
        this.router.navigate(['/shop']);
        return;
      }
      const productId = paramMap.get('productId');
      this.loadedProduct = this.shopService.getProduct(productId);
    });
  }

  onDeleteProduct() {
    this.alertCtrl
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the product?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.shopService.deleteProduct(this.loadedProduct.id);
              this.router.navigate(['/shop']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
