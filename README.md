# ?? Smartglass Frontend
![CD pipeline status](https://github.com/adrianliz/smartglass_frontend/actions/workflows/cd.yml/badge.svg)

## ??Introducci車n

Smartglass es un software que permite a sus usuarios el mantenimiento predictivo de sus m芍quinas-herramienta de mecanizado de vidrio a tav谷s de diferentes anal赤ticas referentes a su funcionamiento productivo.

Este proyecto es el resultado de la implementaci車n de la [metodolog赤a propuesta por dos investigadores de la Universidad de Auckland](https://doi.org/10.1016/j.jmsy.2018.05.003) para la implementaci車n pr芍ctica de digital twins en el contexto de la Industria 4.0.

Forma parte de la realizaci車n de mi TFG para la Universidad de Zaragoza.

## ?? Estado
```diff
+ [En desarrollo]
```

## ? Versiones disponibles
- :white_check_mark: v0.1.0 -> Se muestra un dashboard con los distintas gemelos de prueba

![v0.1.0](screenshots/v0.1.0.png)

- :white_check_mark: v0.2.0 -> Uso de Angular Material como proveedor de componentes est芍ndar y creaci車n de un sidenav b芍sico

![v0.2.0](screenshots/v0.2.0.png)

- :white_check_mark: v0.3.0 -> P芍gina de registro b芍sica

![v0.3.0](screenshots/v0.3.0.png)

- :white_check_mark: v0.4.0 -> P芍gina de login b芍sica

![v0.4.0](screenshots/v0.4.0.png)

- :white_check_mark: v0.5.0 -> L車gica de negocio de autenticaci車n con Google Firebase

- :white_check_mark: v0.6.0 -> Servicio de conexi車n con el backend y ratios de cada gemelo

![v0.6.0](screenshots/v0.6.0.png)

- :white_check_mark: v0.7.0 -> Primera versi車n que consigue mostrar gr芍ficos y/o tablas de distintas estad赤sticas

![v0.7.0](screenshots/v0.7.0.png)

- :white_check_mark: v0.7.1 -> Carga din芍mica de estad赤sticas, refactorizaci車n, loaders y mensajes de error

![v0.7.1_1](screenshots/v0.7.1_1.png)
![v0.7.1_2](screenshots/v0.7.1_2.png)
![v0.7.1_3](screenshots/v0.7.1_3.png)

- :white_check_mark: v0.8.0 -> A?adido gr芍fico de l赤neas para mostrar el uso de la m芍quina

![v0.8.0](screenshots/v0.8.0.png)

- :white_check_mark: v0.9.0 -> Interfaz internacionalizada y localizada al ingl谷s y al espa?ol

- :white_check_mark: v0.9.1 -> Loader global con interceptors y pulido general

- :white_check_mark: v0.10.0 -> Perfil de usuario

![v0.10.0](screenshots/v0.10.0_1.png)
![v0.10.0](screenshots/v0.10.0_2.png)

## ?? Variables de entorno

Se deben usar estas variables en los ficheros environment.ts:
- production: boolean -> Indica si es una build de producci車n
- firebase: object -> Configuraci車n de firebase
- twinsBaseURL: string -> URL base de la API de gemelos del backend
- statisticsBaseURL: string -> URL base de la API de estad赤sticas del backend

## ?? Integraci車n continua

- Se dispone de un workflow de GitHub Actions que permite subir una imagen de la aplicaci車n a Docker Hub en cada PUSH o PULL_REQUEST en la rama main

- ?? Makefile:
	- Ejecutar `make build && make apache2-up-remote` para desplegar la aplicaci車n en la m芍quina 155.210.68.101
	- Ejecutar `make docker-up-remote` para crear un contenedor en la m芍quina 155.210.68.101 con la 迆ltima imagen disponible
		en Docker Hub
	- Ejecutar `make docker-down-remote` para parar dicho contenedor
	- Ejecutar `make logs` para obtener los logs del contenedor en el fichero `logs.txt`
	
	- NOTA: Se necesita tener un usuario en la m芍quina 155 o modificar el servidor de producci車n.