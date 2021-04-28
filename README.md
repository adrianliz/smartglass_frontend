# 🤖 Smartglass Frontend
Smartglass pretende ser un software que permita a sus usuarios tener información en tiempo real del estado de sus
distintas máquinas-herramienta de corte de vidrio

También, se podrán generar distintas estadísticas derivadas de los resultados de explotación de dichas máquinas

## 💡 Estado
```diff
+ [En desarrollo]
```

## 🎉 Versión de prueba
Ir a [Smartglass](http://155.210.68.101)

## ⚡ Versiones disponibles
- :white_check_mark: v0.1.0 -> Se muestra un dashboard con los distintas gemelos de prueba

![v0.1.0](screenshots/v0.1.0.png)

- :white_check_mark: v0.2.0 -> Uso de Angular Material como proveedor de componentes estándar y creación de un sidenav básico

![v0.2.0](screenshots/v0.2.0.png)

- :white_check_mark: v0.3.0 -> Página de registro básica

![v0.3.0](screenshots/v0.3.0.png)

- :white_check_mark: v0.4.0 -> Página de login básica

![v0.4.0](screenshots/v0.4.0.png)

- :white_check_mark: v0.5.0 -> Lógica de negocio de autenticación con Google Firebase

- :white_check_mark: v0.6.0 -> Servicio de conexión con el backend y ratios de cada gemelo

![v0.6.0](screenshots/v0.6.0.png)

- :white_check_mark: v0.7.0 -> Primera versión que consigue mostrar gráficos y/o tablas de distintas estadísticas

![v0.7.0](screenshots/v0.7.0.png)

- :white_check_mark: v0.7.1 -> Carga dinámica de estadísticas, refactorización, loaders y mensajes de error

![v0.7.1_1](screenshots/v0.7.1_1.png)
![v0.7.1_2](screenshots/v0.7.1_2.png)
![v0.7.1_3](screenshots/v0.7.1_3.png)

- :white_check_mark: v0.8.0 -> Añadido gráfico de líneas para mostrar el uso de la máquina

![v0.8.0](screenshots/v0.8.0.png)

- :white_check_mark: v0.9.0 -> Interfaz internacionalizada y localizada al inglés y al español

- :white_check_mark: v0.9.1 -> Loader global con interceptors y pulido general

## 📁 Variables de entorno

Se deben usar estas variables en los ficheros environment.ts:
- production: boolean -> Indica si es una build de producción
- firebaseKey: string -> API key necesaria para Firebase
- firebaseBaseURL: string -> URL base de la API identitytoolkit de Firebase
- twinsBaseURL: string -> URL base de la API de gemelos del backend
- statisticsBaseURL: string -> URL base de la API de estadísticas del backend

## 🏁 Integración continua

¿Cómo desplegar el frontend en un servidor Apache 155.210.68.101? -> Ejecutar:
- ng build --prod
- scp -r dist alizaga@155.210.68.101:/home/alizaga/Escritorio/smartglass-frontend-builds/last
- ssh alizaga@155.210.68.101 "rm -rf /var/www/smartglass/* && cp -r /home/alizaga/Escritorio/smartglass-frontend-builds/last/dist/smartglass/. /var/www/smartglass"
- Reiniciar Apache como sudo (sudo service apache2 restart)

Nota: Se puede desplegar en cualquier otra máquina y/o servidor de forma parecida copiando el directorio dist resultado 
de ng build --prod


	
 

