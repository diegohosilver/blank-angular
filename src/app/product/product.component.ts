import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

	@Input("product") product?: number;
	ProductType = ProductType;
	count = 0;
	products = new Array<string>();

	addItem(): void {
		this.count ++;

		this.products.push(`${this.count} ${this.getProductName()}`);
	}

	getProductName(): string {

		switch(this.product) {
			case ProductType.Cafe:
				return "Café Bonafide";
			case ProductType.Galletitas:
				return "Galletitas Toddy's";
			default:
				return "Ni idea que es esto";
		}
	}
}
