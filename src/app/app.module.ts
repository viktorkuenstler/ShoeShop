import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router-module/AppRoutingModule';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { HelloComponent } from './hello.component';
import { ListOfProductsComponent } from './backend/list-of-products/list-of-products.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListOfProductsComponent,
    ToolbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
