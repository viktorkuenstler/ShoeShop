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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { TextFieldModule } from '@angular/cdk/text-field';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { ListOfProductsComponent } from './backend/list-of-products/list-of-products.component';
import { TableBasicExampleComponent } from './backend/table-basic-example/table-basic-example.component';
import { ProgressSpinnerOverviewComponent } from './backend/progress-spinner-overview/progress-spinner-overview.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './backend/create-product/create-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules = [
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
  MatProgressSpinnerModule,
  MatTableModule,
  TextFieldModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [...modules],
  declarations: [
    AppComponent,
    HelloComponent,
    ListOfProductsComponent,
    SidenavComponent,
    CreateProductComponent,
    ProgressSpinnerOverviewComponent,
    TableBasicExampleComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
