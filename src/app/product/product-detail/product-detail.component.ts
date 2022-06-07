import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any

  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!]
    })
  }

}
