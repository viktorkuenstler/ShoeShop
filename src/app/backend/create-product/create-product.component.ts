import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../../DataTransferObjects/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  @Output() createProductToEmit = new EventEmitter();

  product: Product;
  productId: number;

  constructor(private route: ActivatedRoute) {
    this.product = new Product(1, '', '', new Date(2022, 1), 100);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

      if (params.productId != undefined) {
        // Get the query param 'productId'
        this.productId = params.productId;

        // Load the product from the product list
        var productsAsJSON = window.localStorage.getItem('products');

        // if products is empty, to nothing
        if (productsAsJSON == undefined) {
          console.log('products == undefined');
        } else {
          console.log('products != undefined');

          // transform Json to Array
          var productList = JSON.parse(
            productsAsJSON
          ) as unknown as Array<Product>;
        }

        // iterate over the product list
        // get the product with the productid from the query param
        for (let i = 0; i < productList.length; i++) {
          if (this.productId < productList[i].id) {
            this.product = productList[i];
          }
        }
      }

      console.log('Query Param:' + this.productId);
    });
  }

  onSave() {
    var products = window.localStorage.getItem('products');

    if (products == undefined) {
      console.log('products == undefined');

      var productList = new Array<Product>();

      productList.push(this.product);

      window.localStorage.setItem('products', JSON.stringify(productList));
      console.log('Wurde gespeichert' + JSON.stringify(productList));
    } else {
      console.log('products != undefined');

      var productsAsJSON = window.localStorage.getItem('products');

      var productList = JSON.parse(productsAsJSON) as unknown as Array<Product>;

      // iterate over the list of products
      // get the highest product id
      var maxId = 0;
      for (let i = 0; i < productList.length; i++) {
        if (maxId < productList[i].id) {
          maxId = productList[i].id;
        }
      }

      this.product.id = maxId;

      console.log('Wurde gespeichert' + this.product);
      console.log('Inhalt Produktliste:' + productList);

      productList.push(this.product);

      window.localStorage.setItem('products', JSON.stringify(productList));
      console.log('Wurde gespeichert' + JSON.stringify(productList));
    }
  }
}
