---
id: node
title: Node.JS
sidebar_label: ¿Que es Node.JS?
---

Ver la [documentation](https://nodejs.org/en/about/) para saber más.

## ¿Que es Node.JS?

Node.JS es un entorno de ejecución ECMAScript en tiempo real multiplataforma de código abierto con arquitectura orientada a eventos y basado en el motor V8 de Google.

## ECMAScript (JavaScript)

ECMAScript se basa en varias tecnologías de origen, siendo las más conocidas JavaScript (Netscape) y JScript (Microsoft). El lenguaje fue inventado por Brendan Eich en Netscape y apareció por primera vez en el navegador Navigator 2.0 de esa compañía. Ha aparecido en todos los navegadores posteriores de Netscape y en todos los navegadores de Microsoft a partir de Internet Explorer 3.0.

## Programación asíncrona

Además de la alta velocidad de ejecución, Node.js dispone del Bucle de Eventos (Event Loop), que permitirá gestionar enormes cantidades de clientes de forma asíncrona. Tradicionalmente para trabajar de forma asíncrona las aplicaciones se valían de la programación basada en hilos (programming threaded applications), pero esto supone la utilización (normalmente ineficaz) de un espacio de memoria que va escalando a medida que la cantidad de clientes conectados a nuestra aplicación aumenta.


## Centrado en la escalabilidad

Node.js se diseñó con la escalabilidad en mente, en particular, con la capacidad de soportar una gran cantidad de conexiones simultáneas a un servidor. Muchas tecnologías en el lado del servidor ejecutan el entorno de cada una de las peticiones en un hilo independiente. Cuando el número de peticiones aumentan, aumentan los recursos consumidos en el servidor. Además de los condicionantes para el rendimiento de un ordenador (RAM, CPU, velocidad de conexión), en un servidor el muchas veces el cuello de botella son los procesos de entradas y salidas (E/S). Como alternativa, Node.js emplea un único hilo y un bucle de eventos asíncrono. Las nuevas peticiones son tratadas como eventos en este bucle. Este es el motivo  por el que las características asíncronas y los eventos de JavaScript encajan tan bien en la filosofía de Node.js Esto permite que Node.js sea capaz de gestionar múltiples conexiones y peticiones de forma muy eficiente, lo que lo hace apropiado para desarrollo y aplicaciones con un gran número de conexiones simultáneas.

## NPM (Node Package Manager)

Node Package Manager o simplemente npm es un gestor de paquetes que da acceso a un conjunto de librerías muy extenso que además son gratuitas, podremos tener cualquier librería disponible con solo una línea de código, generadas a partir de la colaboración de los usuarios de su comunidad, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla. Algunos de los paquetes más conocidos que podrás encontrar en su plataforma son React, Gulp, Browserify, Grunt-cli, Bower, Grunt, Express, Cordova o Forever.
