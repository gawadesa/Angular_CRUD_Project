import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.all().subscribe(
      products => {
        this.products = products
      }
    )
  }

  productDel(Id: number): void {
    this.productService.delete(Id).subscribe(
      () => {
        this.products = this.products.filter( p => p.id !== Id );
      }
    )
  }

}