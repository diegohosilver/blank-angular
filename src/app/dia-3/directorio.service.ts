import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class DirectorioService {

  telefonos = [];

  constructor(public apiService: ApiService) { }

  getTelefonoByCliente(nombre: string) {

	let { telefonos } = this.apiService.getTelefonos();

	let telefono = telefonos.find(x => x.nombre == nombre);

	return telefono?.numero;
  }
}
