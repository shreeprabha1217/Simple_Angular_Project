import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { ProductRoutingModule } from './products/products.routing';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


//import { productComponent } from './product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
