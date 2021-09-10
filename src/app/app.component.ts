import { Component, OnInit } from '@angular/core';
import { ProductType } from './product-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
	products = new Array<number>();

	ngOnInit(): void {

		this.products.push(ProductType.Cafe);
		this.products.push(ProductType.Galletitas);
		this.products.push(ProductType.Harina);
	}
}
