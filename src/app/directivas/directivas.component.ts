import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent {

	list = ["Café", "Galletitas", "Yogur"];
	count = 0;

	hasItems(): boolean {
		return this.count > 0;
	}

	addItem(): void {
		this.count ++;
	}
}
