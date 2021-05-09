import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  // SERVICE TO ADD ALL THE CRUD OPTIONS FOR THE PRODUCTS
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {}

  createProduct() {}

  deleteProduct() {}

  updateProduct() {}
}
