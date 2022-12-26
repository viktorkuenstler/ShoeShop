import { Component, OnInit } from '@angular/core';
import { Product } from '../../DataTransferObjects/Product';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {

  products: Array<Product> = [
    new Product('A100', 'SuperSneaker1', new Date(2022, 1), 100),
    new Product('A200', 'SuperSneaker2', new Date(2022, 2), 200),
    new Product('A300', 'SuperSneaker3', new Date(2022, 3), 300),
  ];

  constructor() {}

  ngOnInit() {}
}
