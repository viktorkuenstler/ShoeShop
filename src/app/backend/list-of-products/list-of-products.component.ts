import { Component, OnInit } from '@angular/core';
import { Product } from '../../DataTransferObjects/Product';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {

  products: Array<Product> = [
    new Product(1, 'A100', 'SuperSneaker1', new Date(2022, 1), 100),
    new Product(2, 'A200', 'SuperSneaker2', new Date(2022, 2), 200),
    new Product(3, 'A300', 'SuperSneaker3', new Date(2022, 3), 300),
  ];

  constructor() {
    var productsAsJSON = window.localStorage.getItem('products');

    var productList = JSON.parse(productsAsJSON) as unknown as Array<Product>;

    this.products = productList;
  }

  ngOnInit() {}
}
