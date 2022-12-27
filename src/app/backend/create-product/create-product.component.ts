import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Product } from '../../DataTransferObjects/Product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  @Output() createProductToEmit = new EventEmitter();

  product: Product;

  constructor() {
    this.product = new Product('', '', new Date(2022, 1), 100);
  }

  ngOnInit() {}

  onSave() {
    console.log('function called');
    alert("Hello World!");
  }
}
