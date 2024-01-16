import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes=[
    {path:'productList',component:ProductListComponent},
    {path:'productDetails/:title',component:ProductDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
  })
  export class ProductRoutingModule { }
  