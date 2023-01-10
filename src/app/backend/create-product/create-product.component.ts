import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../../DataTransferObjects/Product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PriceValidatorDirective } from '../shared/price-validator.directive';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  @Output() createProductToEmit = new EventEmitter();

  product: Product;
  productId: number;
  originalProduct: Product;
  isSpinnerActivated: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.product = new Product(1, '', '', new Date(2022, 1), 0);
    this.originalProduct = null;
  }

  createProductForm: FormGroup;

  ngOnInit() {
    /*
    const priceControl = new FormControl('', {
      asyncValidators: [this.priceValidator.validate.bind(this.priceValidator)],
      updateOn: 'blur'
    });
    priceControl.setValue(this.product.price.toString());
    */

    this.createProductForm = new FormGroup(
      {
        name: new FormControl(),
        price: new FormControl(),
        yearOfPublication: new FormControl(),
        articleNumber: new FormControl(),
      },
      { validators: PriceValidatorDirective }
    );

    this.route.queryParams.subscribe((params) => {
      console.log(params);

      if (params.productId != undefined) {
        // Get the query param 'productId'
        this.productId = parseInt(params.productId);
        console.log(this.productId);

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
          if (this.productId == productList[i].id) {
            console.log('ProductId from QueryParam: ' + this.productId);
            console.log('ProductId from product:' + productList[i].id);
            console.log(productList[i]);

            this.originalProduct = productList[i];

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

      console.log('this.originalProduct => ' + this.originalProduct);

      // if it is a new created product
      if (this.originalProduct == null) {
        console.log('ProductId:' + this.productId);

        // iterate over the list of products
        // get the highest product id
        var maxId = 0;
        for (let i = 0; i < productList.length; i++) {
          if (maxId < productList[i].id) {
            maxId = productList[i].id;
          }
        }

        this.product.id = maxId + 1;
      } else {
        console.log('Beginne das alte Product aus dem Array zu löschen');
        console.log(
          'Vor dem löschen des Produktes:' + JSON.stringify(productList)
        );

        var index = -1;

        for (let i = 0; i < productList.length; i++) {
          if (this.productId == productList[i].id) {
            index = i;
          }
        }

        console.log('indexOf ist:' + index);

        if (index > -1) {
          productList.splice(index, 1);
        }

        console.log(
          'Nach dem löschen des Produktes:' + JSON.stringify(productList)
        );
      }

      console.log('Wurde gespeichert' + this.product);
      console.log('Inhalt Produktliste:' + productList);

      productList.push(this.product);

      window.localStorage.setItem('products', JSON.stringify(productList));
      console.log('Wurde gespeichert' + JSON.stringify(productList));

      this.isSpinnerActivated = true;

      setTimeout(() => {
        this.isSpinnerActivated = false;
        this.router.navigate(['/list-of-products']);
      }, 2000);
    }
  }
}
