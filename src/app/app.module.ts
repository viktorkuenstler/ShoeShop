import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './router-module/AppRoutingModule';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { HelloComponent } from './hello.component';
import { ListOfProductsComponent } from './backend/list-of-products/list-of-products.component';
import { ProgressSpinnerOverviewComponent } from './backend/progress-spinner-overview/progress-spinner-overview.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { CreateProductComponent } from './backend/create-product/create-product.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListOfProductsComponent,
    ToolbarComponent,
    SidenavComponent,
    CreateProductComponent,
    ProgressSpinnerOverviewComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
