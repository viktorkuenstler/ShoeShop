import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router-module/AppRoutingModule';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListOfProductsComponent } from './backend/list-of-products/list-of-products.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, ListOfProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
