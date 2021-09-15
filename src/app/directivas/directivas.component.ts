import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

	list = ["Café", "Galletitas", "Yogur"];
	count = 0;
	amount = 0;
	customClass = "";
	buttonText = "Agregar";

	ngOnInit(): void {
		this.getFromStorage();
		this.customClass = "default";
	}

	hasItems(): boolean {
		return this.count > 0;
	}

	hasAmount(): boolean {
		return this.amount != null && this.amount > 0;
	}

	addItem(): void {

		if (this.hasAmount()) {

			this.count += this.amount;

			this.saveToStorage();
		}
		else {
			this.count ++;
		}
	}

	getFromStorage(): void {

		let value = localStorage.getItem("amount");

		if (value != null) {

			this.amount = Number.parseInt(value);
		}
	}

	saveToStorage(): void {

		if (this.hasAmount()) {
			localStorage.setItem("amount", `${this.amount}`);
		}
	}
}
