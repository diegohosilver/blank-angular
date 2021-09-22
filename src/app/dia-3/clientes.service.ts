import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { DirectorioService } from './directorio.service';

@Injectable()
export class ClientesService {

  constructor(public apiService: ApiService, public directorioService: DirectorioService) { }

  getClientes() {

	let { clientes } = this.apiService.getClientes();

	return clientes;
  }

  getDirectorioDeClientes() {

	let directorio = new Array<any>();

	let clientes = this.getClientes();

	clientes.forEach(nombre => {
		
		let telefono = this.directorioService.getTelefonoByCliente(nombre);

		if (telefono) {

			directorio.push({nombre, telefono});
		}
		else {

			directorio.push({nombre});
		}
	});

	return directorio;
  }

}
