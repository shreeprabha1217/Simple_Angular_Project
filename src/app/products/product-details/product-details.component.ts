// Assuming ProductDetails is an interface representing the structure of a product's details
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './product-details.interface';
import { ProductDetailsService } from './product-details.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl:'./product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id;
  productDetails: ProductDetails;
  productForm!:FormGroup;
  

  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.productForm=this.fb.group({
      title:[''],
      description:[''],
      price:[''],
      discount:[''],
      rating:[''],
      stock:[''],
      brand:[''],
      category:[''],
      delete:[''],
      thumbnail:[''],
      images:['']
    })
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProductDetails(this.id);
      // this.deleteDetails(this.id);
    });
  }
  
  

  private getProductDetails(id:number): void {
    this.productDetailsService.getProductDetails(id).subscribe(
      (productDetails) => {
        this.productDetails = productDetails;
        this.productForm.patchValue({
          title: productDetails.title,
          description: productDetails.description,
          price: productDetails.price,
          discount: productDetails.discountPercentage,
          rating: productDetails.rating,
          stock: productDetails.stock,
          brand: productDetails.brand,
          category: productDetails.category,
          thumbnail:productDetails.thumbnail,
          images:productDetails.images
          
        });
        console.log(productDetails);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  deleteDetails(id: number): void {
    this.productDetailsService.deleteDetails(id).subscribe(
      () => {
        alert('Deleted Successfully');
        history.back();
      }
    );
  }
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  
  //   if (file) {
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       // Set the data URL as the value of the 'thumbnail' form control
  //       this.productForm.patchValue({
  //         thumbnail: e.target.result,
  //       });
  //     };
  
  //     // Read the contents of the file as a data URL
  //     reader.readAsDataURL(file);
  //   }
  // }
  
  
  }
  
  


