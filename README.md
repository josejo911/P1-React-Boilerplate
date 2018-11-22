# P1-React-Boilerplate


## Software 

Antes de comenzar, asegurarse de tener instalado los siguientes programas.

* Node
* Yarn (opcional)
* Git command line tools
* Editor de texto

### Links para herramientas

* Descaargar Git- Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Descargar Node - https://nodejs.org/en/
* Descargar Yarn CLT - https://yarnpkg.com/lang/en/docs/install/

## Instalacion

1. Clonar el repositorio en su maquina 

```
  git clone <CloneURL>
```

2. En la terminal ir al directorio donde se clono el proyecto y proceder a instalar las dependencias de node 

```
  cd <new-dir> 
  yarn install ó npm install
```

3. Antes de hacer nuestro build, hacer un deploy de la aplicacion es importante para asegurarse que nuestro 'webConfig.json' esta configurado para nuestro enviroment. Si vamos a utilizar un localhost debemos de cambiarlo o podriamos poner nuestro url en el server.

```
    {
    "siteURL": "http://localhost:3000", ...

    OR

    {
    "siteURL": "http://mydomain.com", ... 
```

5. Debemos hacer un build de la app antes de ejecutarla

```
  yarn run build ó npm run build
```

6. Ejecutar el build

```
  yarn run dev ó npm run dev
```

Esto deberia de ejecutar la aplicacion y empezar a correrla en esta direccion (copiarla en un browser): http://localhost:3000/


## Notas

Para una version especifica de dependencias ir al archivo 'package.json' en este archivo se encuentra el directorio principal del proyecto.


## Arquitectura del proyecto

En el directorio del proyecto encontraremos una carpeta (source) src, donde encontraremos las siguientes carpetas:

1. 'assets'

En esta carpeta se encuentran los archivos importantes que se hace referencia a nuestra aplicacion durante la ejecucion.

2. 'client'

En esta carpeta encontramos nuestro codigo principal. 

### Dentro de la carpeta principal 'src'

1. 'actions'

Cualquier accion que creemos deberia ser exportada desde este archivo. (incl async)

2. common

Esta carpeta contiene codigo que es compartido. Por ejemplo forms, input, tipos or forms de validacion.

3. components

Esta carpeta contiene componentes que no estan conectados a la tienda. Por ejemplo, podemos encontrar los encabezados o pie de pagina.

4. endpoints

Para esto utilizamos una libreria llamada axios que maneja nuestros request ambos en el servidor y el cliente.

Se creo una instancia a axios utilizando 'baseURL' para el uso de la API principal. Esto significa que cuando realicemos una llamada unicamente debemos dar la ruta, cuerpo y el request.

Aca podemos ver un ejemplo:

```
  api.post(landingPageAPI, body).then(response => { ...
``` 

NOTA: 'baseURL' es definida en el 'webconfig' si se necesita realizar un request a una API diferente se debe usar axios sin esa instancia.

5. Layouts

Utilizamos un layout para realizar el render de las rutas. En la configuracion definimos un layour unico para cada ruta. Eso es funcional para paginas con una funcionalidad unica.

Se puede ver que nuestras rutas se renderean si ponemos el siguiente codigo

```
  {renderRoutes(this.props.route.routes)}
```

6. Pages

This folder is self-explanatory.

Please maintain the proper naming conventions. For example, 'namePage'.

## Important
Si bien la mayoría de nuestro código es estándar, debemos tener en cuenta la función especial 'loadData' que se exporta.

Como saben, esta es una aplicación universal, lo que significa que debemos configurar nuestras páginas para que se ejecuten tanto en el servidor como en el cliente.

La función 'loadData' se usa para decirle al servidor qué llamadas deben completarse antes de descargar el código html inicial al navegador.


7. Reducers

Esta carpeta se explica por sí misma.

Por favor, tener en cuenta las convenciones de nomenclatura adecuadas. Por ejemplo, 'nameReducer'.

Antes de crear una tienda, combinamos nuestros reducers. Asegúrese de que todos los nuevos reducers se importen al archivo principal 'índice' dentro del directorio y se agreguen al método / objeto de combinar reducers.

8. FILE: app.js

Layout predefinido de la aplicacion

9. FILE: routes.js

Este archivo se explica por sí mismo.

Aunque estamos usando 'React Router 4' ya que esta es una aplicación universal, estoy usando el enrutador estático.

Esto se debe a que necesitamos manejar dos tipos de enrutamiento, ya que debe ejecutarse tanto en el cliente como en el servidor.

Más información se puede encontrar:

https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config


## Deployment

Para hacer el deploy de la app, simplemente seguir los siguientes pasosTo deploy the app, simply follow the steps:

1. instalar dependencias

2. Correr el build

3. Iniciar la app con el siguiente comando - 'node build/bundle.js' 



