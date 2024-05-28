import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes=[
    {path:'productList',component:ProductListComponent},
    {path:'productDetails/:id',component:ProductDetailsComponent},
//     { path: 'productList', loadChildren: () => import('./products.module').then(m => m.ProductsModule) },
//   { path: 'productDetails/:id', loadChildren: () => import('./products.module').then(m => m.ProductsModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
  })
  export class ProductRoutingModule { }
  