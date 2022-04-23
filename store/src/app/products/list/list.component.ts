import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productsList: Product[] = [];
  selectedProduct = {};
  limit = 10;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts(this.limit).subscribe(products => {
      this.productsList = products;
      console.log(this.productsList);
    });
  }

  onViewProductDetails(product: Product) {
    this.selectedProduct = product;
    console.log(product);
  }

  showMoreProducts() {
    this.limit += 10;
    this.getProducts();
  }

}
