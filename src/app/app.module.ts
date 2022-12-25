import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListOfProductsComponent } from './backend/list-of-products/list-of-products.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'list-of-products', component: ListOfProductsComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ListOfProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
