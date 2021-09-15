# blank-angular
Aplicación de ejemplo a utilizar en curso de Angular

## Prerequisitos

Tener instalado nvm con alguna versión reciente de node

## Instalación

1. Instalar angular de forma global
```
npm install -g @angular/cli
```

2. Descargar el repositorio e instalar dependencias
```
cd blank-angular
npm install
```

3. Correr el proyecto
```
ng serve
```

## Diapositivas y enlaces útiles

1. [Introducción](https://docs.google.com/presentation/d/1XRLgRDoVQBGtAY8aO2vUMtF2Whoi_IlfxYQkws0OeS4/edit?usp=sharing)

2. [Elementales](https://docs.google.com/presentation/d/17m9-behcVUybIUjle3z_eEiWOOGKIMI7HIjcyacX1gU/edit?usp=sharing)

2.1 [Directivas](https://angular.io/guide/attribute-directives)

## Tarea

Día 2
```
- Crear una clase Producto que tenga 3 atributos: Nombre, Tipo y Foto (url).

- Generar una lista de productos (del tipo del punto anterior).

- Opcional: Crear un componente contenedor de Producto llamado Productos

- Refactorizar ProductComponent para que reciba como parametro un Producto y muestre su información.

- En el caso de que el Producto recibido no tenga foto, mostrar una foto genérica.

- Set de datos:

	* Cafe
	* Galletitas
	* Yogur
	* Desconocido -> no tiene foto
```