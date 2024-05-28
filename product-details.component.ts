// Assuming ProductDetails is an interface representing the structure of a product's details
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './product-details.interface';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: ProductDetails[] = [];

  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      this.getProductDetails(title);
    });
  }

  private getProductDetails(title: string): void {
    this.productDetailsService.getProductDetails(title).subscribe(
      (productDetails) => {
        this.productDetails = productDetails['products'];
        console.log(productDetails);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
