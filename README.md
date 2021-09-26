# ?? Smartglass Frontend
![CD pipeline status](https://github.com/adrianliz/smartglass_frontend/actions/workflows/cd.yml/badge.svg)

## ??Introducci��n

Smartglass es un software que permite a sus usuarios el mantenimiento predictivo de sus m��quinas-herramienta de mecanizado de vidrio a tav��s de diferentes anal��ticas referentes a su funcionamiento productivo.

Este proyecto es el resultado de la implementaci��n de la [metodolog��a propuesta por dos investigadores de la Universidad de Auckland](https://doi.org/10.1016/j.jmsy.2018.05.003) para la implementaci��n pr��ctica de digital twins en el contexto de la Industria 4.0.

Forma parte de la realizaci��n de mi TFG para la Universidad de Zaragoza.

## ?? Estado
```diff
+ [En desarrollo]
```

## ? Versiones disponibles
- :white_check_mark: v0.1.0 -> Se muestra un dashboard con los distintas gemelos de prueba

![v0.1.0](screenshots/v0.1.0.png)

- :white_check_mark: v0.2.0 -> Uso de Angular Material como proveedor de componentes est��ndar y creaci��n de un sidenav b��sico

![v0.2.0](screenshots/v0.2.0.png)

- :white_check_mark: v0.3.0 -> P��gina de registro b��sica

![v0.3.0](screenshots/v0.3.0.png)

- :white_check_mark: v0.4.0 -> P��gina de login b��sica

![v0.4.0](screenshots/v0.4.0.png)

- :white_check_mark: v0.5.0 -> L��gica de negocio de autenticaci��n con Google Firebase

- :white_check_mark: v0.6.0 -> Servicio de conexi��n con el backend y ratios de cada gemelo

![v0.6.0](screenshots/v0.6.0.png)

- :white_check_mark: v0.7.0 -> Primera versi��n que consigue mostrar gr��ficos y/o tablas de distintas estad��sticas

![v0.7.0](screenshots/v0.7.0.png)

- :white_check_mark: v0.7.1 -> Carga din��mica de estad��sticas, refactorizaci��n, loaders y mensajes de error

![v0.7.1_1](screenshots/v0.7.1_1.png)
![v0.7.1_2](screenshots/v0.7.1_2.png)
![v0.7.1_3](screenshots/v0.7.1_3.png)

- :white_check_mark: v0.8.0 -> A?adido gr��fico de l��neas para mostrar el uso de la m��quina

![v0.8.0](screenshots/v0.8.0.png)

- :white_check_mark: v0.9.0 -> Interfaz internacionalizada y localizada al ingl��s y al espa?ol

- :white_check_mark: v0.9.1 -> Loader global con interceptors y pulido general

- :white_check_mark: v0.10.0 -> Perfil de usuario

![v0.10.0](screenshots/v0.10.0_1.png)
![v0.10.0](screenshots/v0.10.0_2.png)

## ?? Variables de entorno

Se deben usar estas variables en los ficheros environment.ts:
- production: boolean -> Indica si es una build de producci��n
- firebase: object -> Configuraci��n de firebase
- twinsBaseURL: string -> URL base de la API de gemelos del backend
- statisticsBaseURL: string -> URL base de la API de estad��sticas del backend

## ?? Integraci��n continua

- Se dispone de un workflow de GitHub Actions que permite subir una imagen de la aplicaci��n a Docker Hub en cada PUSH o PULL_REQUEST en la rama main

- ?? Makefile:
	- Ejecutar `make build && make apache2-up-remote` para desplegar la aplicaci��n en la m��quina 155.210.68.101
	- Ejecutar `make docker-up-remote` para crear un contenedor en la m��quina 155.210.68.101 con la ��ltima imagen disponible
		en Docker Hub
	- Ejecutar `make docker-down-remote` para parar dicho contenedor
	- Ejecutar `make logs` para obtener los logs del contenedor en el fichero `logs.txt`
	
	- NOTA: Se necesita tener un usuario en la m��quina 155 o modificar el servidor de producci��n.