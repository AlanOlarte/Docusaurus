---
id: api_rest
title: API REST
sidebar_label: Protocolo/Arquitectura
---

Un API REST es una aplicación de backend, literalmente es la encargada de consultar la base de datos, procesar esa información y devolver lo que la aplicación móvil necesita. Esta información es obtenida de la base de datos y luego es ordenada y convertida, generalmente, en formato JSON para que cualquier aplicación cliente, de escritorio, web, o móvil, pueda acceder a ella.

## API
Por sus siglas en inglés API significa “Interfaz de Programación de Aplicaciones”. Es un conjunto de requisiciones que permite la comunicación de datos entre aplicaciones.

Para eso, la API utiliza requisiciones HTTP responsables de las operaciones básicas necesarias para la manipulación de datos. Las principales solicitudes son:
- **POST**: crea datos en el servidor.
- **GET**: lectura de datos en el host.
- **DELETE**: borra la información.
- **PUT**: registro de actualizaciones.


## REST

Por sus siglas en inglés, REST significa “transferencia de estado representacional”, es un conjunto de restricciones que se utilizan para que las solicitudes HTTP cumplan con las directrices definidas en la arquitectura.

Básicamente, las restricciones determinadas por la arquitectura Rest son:
- **Cliente-servidor**: las aplicaciones existentes en el servidor y el cliente deben estar separadas.
- **Sin estado**: las requisiciones se realizan de forma independiente, es decir, cada una ejecuta solo una determinada acción.
- **Caché**: la API debe utilizar la caché para evitar llamadas recurrentes al servidor.
- **Interfaz uniforme**: agrupa otros cuatro conceptos en los que se determina que los recursos deben ser identificados, la manipulación de los recursos debe ser a través de la representación, con mensajes autodescriptivos y utilizando enlaces para navegar por la aplicación.

Básicamente, existen tres tipos de APIs:
- **Privados**: que se utilizan internamente entre las aplicaciones de una empresa, es decir, localmente.
- **Socios**: que se utilizan entre socios comerciales o para permitir la integración entre diferentes softwares.
- **Público**: que se puede utilizar libremente. A menudo, la empresa los pone a disposición para que los desarrolladores puedan integrarse con otras aplicaciones.

## JSON

JSON, cuyo nombre corresponde a las siglas JavaScript Object Notation o Notación de Objetos de JavaScript, es un formato ligero de intercambio de datos, que resulta sencillo de leer y escribir para los programadores y simple de interpretar y generar para las máquinas.
