import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = new Array<any>()

  constructor(public clientesService: ClientesService) { }

  ngOnInit(): void {
	this.clientes = this.clientesService.getDirectorioDeClientes();
  }

}
