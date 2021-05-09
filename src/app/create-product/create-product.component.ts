import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  isProductCreated = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  close() {
    this.closeModal.emit(false);
  }

  createProduct() {
    // CALL THE SUBSCRIBE FROM CREATE ENDPOINT

    this.isProductCreated = true;
  }
}
