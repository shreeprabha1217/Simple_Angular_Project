import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-list.service';
import { Products } from './product-list.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Products[]=[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products['products'];
      console.log(products);
    },
    (error) => {
      console.error('Error fetching products:', error);
      
    });
    
  }

}
