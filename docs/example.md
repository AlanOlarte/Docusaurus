---
id: example
title: Ejemplo
sidebar_label: Ejemplo API REST 
---

En éste ejemplo de API REST solicitare unos datos a un servidor creado con Node.JS, para hacerlo se usara un editor de código Visual Studio Code el cual contiene una terminal integrada, se crea una carpeta donde tendremos guardado el proyecto, se abre la carpeta con Visual Studio Code y desde la terminal integrada escribimos lo siguiente:

```
npm init --yes
```

Para compilar de forma rápida el proyecto y nos creara un archivo json. `package.json`

Instalaremos unos paquetes de apoyo para agilizar el desarrollo y para eso escribimos los siguientes comandos:

```
npm i express morgan 
```

> + **Express**: es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
> + **Morgan**: es un middleware Node.js y Express para registrar solicitudes y errores HTTP, y simplifica el proceso. En Node.js y Express, middleware es una función que tiene acceso a los métodos y el ciclo de vida, y el método para continuar la lógica en el servidor Express.

Se instalare un ultimo paquete con el siguiente comando:

```
npm i nodemon -D 
```

> + **Nodemon** : es una utilidad que supervisará cualquier cambio en su fuente y reiniciará automáticamente su servidor. 

Editamos nuestro archivo json que se nos creó en un principio `package.json` en el apartado **“scripts”** como se muestra a continuación:

```
"scripts": {
   "dev": "nodemon src/index.js"
},
```

Creamos una carpeta llamada **“src”** y dentro de ella un archivo llamado `“index.js”` donde escribiremos el siguiente código:

```
// Se solicita el paquete de express y
// se guarda en una constante con el mismo nombre
// Lo mismo se hace con el paquete de morgan
const express = require('express');
const morgan = require('morgan');
// En una constante se tendrán las funciones
//del paquete express
const app = express();
// Setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Routes
app.use('/api/movies',require('./routes/movies'));
// Starting the server
app.listen(app.get('port'), () => {
   console.log(`Server on port ${app.get('port')}`);
});
```

Creamos otro archivo llamado `sample.json` que será donde agregaremos el siguiente arreglo:

```
[
   {
      "id" : 1,
      "title" : "Aliens",
      "director" : "James Cameron",
      "year" : 1986,
      "rating" : 8.5
   },
   {
      "id" : 2,
      "title" : "The Dark Knight",
      "director" : "Cristopher Nolan",
      "year" : 2008,
      "rating" : 10
   }
]
```

Una carpeta con el nombre de “routers” que será donde guardaremos nuestras rutas y dentro un archivo llamado “movies.js” donde escribiremos el síguete código: 

```
const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json');

router.get('/', (req, res) => {
      res.json(movies);
});

router.post('/', (req, res) => {
   const { title, director, year, rating } = req.body;
   if ( title && director && year && rating) {
      const id = movies.length + 1;
      const newMovie = {id, ...req.body};
      movies.push(newMovie);
      res.json(movies);
   } else {
      res.status(500).json({error: 'There was an error'});
   }
});

router.put('/:id', (req, res) => {
   const { id } = req.params;
   const { title, director, year, rating } = req.body;
   if ( title && director && year && rating) {
      _.each(movies, (movie, i) => {
         if (movie.id == id) {
            movie.title = title;
            movie.director = director;
            movie.year = year;
            movie.rating = rating;
         }
      });
      res.json(movies);
   } else {
      res.status(500).json({error: 'There was an error'});
   }
});

router.delete('/:id', (req, res) => {
   const { id } = req.params;
   _.each(movies, (movie, i) => {
      if (movie.id == id) {
         movies.splice(i, 1);
      }
   });
   res.send(movies);
});

module.exports = router;
```

Con el siguiente comando levantamos nuestro servidor:

```
npm run dev 
```

y desde un navegador escribimos la siguiente url: `http://localhost:3000/api/movies`

Para finalizar nuestro navegador nos mostrará lo siguiente:

![alt-text](/img/capture.png "Capture")
