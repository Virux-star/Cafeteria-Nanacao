Cafetería Nanacao

Proyecto de testing para una API REST de cafetería utilizando **Jest** y **Supertest**.

 Tests realizados

* GET `/cafes`: comprueba que devuelve código **200** y un arreglo con al menos un café.
* DELETE `/cafes/:id`: comprueba que devuelve **404** al intentar eliminar un café inexistente.
* POST `/cafes`: comprueba que se agrega un nuevo café y devuelve código **201**.
* PUT `/cafes/:id`: comprueba que devuelve **400** cuando el ID de la URL es diferente al ID enviado en el payload.

 Tecnologías utilizadas

* Node.js
* Express
* Jest
* Supertest

 Ejecutar el proyecto

Instalar las dependencias:

```bash
npm install
```

Ejecutar los tests:

```bash
npm test
```
