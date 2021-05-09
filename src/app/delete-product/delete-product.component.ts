import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  isProductDeleted = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter(false);

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeModal.emit(false);
  }

  deleteProduct() {
    // CALL THE SUBSCRIBE FROM DELETE ENDPOINT
    this.isProductDeleted = true;
  }
}
