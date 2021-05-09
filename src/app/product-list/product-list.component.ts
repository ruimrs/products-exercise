import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  showCreateProductModal: boolean;
  showDeleteProductModal: boolean;

  // CALL THE SUBSCRIBE FROM GETPRODUCTS ENDPOINT

  constructor() {}

  ngOnInit(): void {}

  triggerNewProductModal() {
    this.showCreateProductModal = !this.showCreateProductModal;
  }

  triggerDeleteProductModal() {
    this.showDeleteProductModal = !this.showDeleteProductModal;
  }
}
