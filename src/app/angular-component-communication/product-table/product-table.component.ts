import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product-service.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  //constructor(){}

  // @Input("productService")
  // productService: ProductService;

  constructor(private productService: ProductService) {}
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Input('testlf')
  testlf: string;

  ngOnChanges(): void {
    console.log('ProductTableComponent - ngOnchanges(): testIf:' + this.testlf);
  }

  ngOnInit(): void {
    console.log('ProductTableComponent - ngOnInit():');
  }

  ngDoCheck(): void {
    console.log('ProductTableComponent-component - ngDochek():');
  }

  ngDestroy(): void {
    console.log('ProductTableComponent-component - ngDesctroy....');
  }
}
