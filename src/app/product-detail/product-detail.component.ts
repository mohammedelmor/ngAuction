import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productService.getProductById(productId);
  }

}
