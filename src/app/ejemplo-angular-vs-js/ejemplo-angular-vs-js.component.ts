import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-angular-vs-js',
  templateUrl: './ejemplo-angular-vs-js.component.html',
  styleUrls: ['./ejemplo-angular-vs-js.component.scss']
})
export class EjemploAngularVsJsComponent implements OnInit {

	title = 'Café Bonafide';

	ngOnInit(): void {
		this.setTitleManually();
	}

	setTitleManually(): void {
		let el: any = document.getElementById("titleElement");
		el.innerHTML = "Café Bonafide";
	}
}
