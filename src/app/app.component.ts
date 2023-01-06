import { Component, OnInit, VERSION, Inject} from '@angular/core';
import { Router } from '@angular/router';    
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {}

  onClickgGoToBackend(event?: MouseEvent) {
    this.router.navigate(['/list-of-products']);
  }

  onClickgGoToCreateProduct(event?: MouseEvent) {
    this.router.navigate(['/create-product']);
  }

  onClickClearStorage(event?: MouseEvent) {
    localStorage.clear();
    this.document.location.reload()
  }
}
