import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../product-type';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

	products = new Array<number>();

	ngOnInit(): void {

		this.products.push(ProductType.Cafe);
		this.products.push(ProductType.Galletitas);
		this.products.push(ProductType.Harina);
	}

}
