import { Component, OnInit } from '@angular/core';
import { Product } from '../../DataTransferObjects/Product';
import { Router } from '@angular/router';    

const products: Array<Product> = [
  new Product(1, 'A100', 'SuperSneaker1', new Date(2022, 1), 100),
  new Product(2, 'A200', 'SuperSneaker2', new Date(2022, 2), 200),
  new Product(3, 'A300', 'SuperSneaker3', new Date(2022, 3), 300),
];

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css'],
})
export class ListOfProductsComponent implements OnInit {

  dataSource = products;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];

  constructor(private router: Router) {
    var productsAsJSON = window.localStorage.getItem('products');

    var productList = JSON.parse(productsAsJSON) as unknown as Array<Product>;

    this.dataSource = productList;
  }

  ngOnInit() {}

  onClickProductEdit(productId: any, event?: MouseEvent){
    console.log(productId);
    this.router.navigate(['/create-product'], { queryParams: { "productId" : productId } });
  }
  
}
