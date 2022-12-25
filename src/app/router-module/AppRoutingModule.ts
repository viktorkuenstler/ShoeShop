import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { ListOfProductsComponent } from '../backend/list-of-products/list-of-products.component';

const routes: Routes = [
  { path: 'list-of-products', component: ListOfProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
