import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

	title = 'Café bonafide';
	count = 0;

	addItem(): void {
		this.count ++;
	}
}
