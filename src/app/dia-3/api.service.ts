import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  engine: any;

  constructor() {
	this.engine = { url: 'localhost', port: '1408', user: 'dbadmin', password: '1234' }
   }

  getClientes() {
	// simulamos llamada a base de datos

	return {
		clientes: [
			'Diego',
			'Walter'
		]
	}
  }

  getTelefonos() {
	// simulamos llamada a base de datos

	return { 
		telefonos: [
			{nombre: 'Diego', numero: '111333555'}, 
			{nombre: 'Walter', numero: '555333111'},
			{nombre: 'Ramiro', numero: '333555111'},
			{nombre: 'Javier', numero: '999555111'}
		], 
		pais: 'Argentina' 
	};
  }
}
